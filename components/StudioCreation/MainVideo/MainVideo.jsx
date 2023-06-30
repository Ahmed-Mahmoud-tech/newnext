import React from "react";

import YouTube from "react-youtube";
import { toast } from "react-toastify";

import {
  BiStopCircle,
  BiPauseCircle,
  BiVideoRecording,
  BiPlayCircle,
  BiReset,
} from "react-icons/bi";

import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["mp3", "WAV", "mp4"];

const MainVideo = ({
  videoWidth,
  dubbingOption,
  option,
  videoId,
  player,
  setPlayer,
  theFile,
  setTheFile,
  audioRef,
  startSec,
  setVideoTitle,
  sectionType,
  setSectionType,
  setVideoDuration,
  numberOfLastAction,
  setNumberOfLastAction,
  startAction,
  setStartAction,
  setControls,
  setEndSec,
  mic,
  recReset,
  recPause,
  pauseSec,
  startRecording,
  stopRecording,
  resumeRecording,
}) => {
  // window

  /***********  recFunction  ***********/

  const onReady = (event) => {
    setPlayer(event.target);
    event.target.mute();
    audioRef?.current.addEventListener("ended", () => {
      event.target.pauseVideo().seekTo(startSec);
    });
    setVideoTitle(event.target.videoTitle);
    console.log("000000.0000,", event.target.videoTitle);
    setVideoDuration && setVideoDuration(event.target.getDuration());
  };

  const recordAgain = () => {
    // audioRef.current.setAttribute("src", "");
    setEndSec();
    setSectionType("record");
    recReset();
  };

  const recStart = () => {
    setNumberOfLastAction(1);
    player.seekTo(startSec).playVideo().mute();
    console.log("recStart");
    if (sectionType === "record") {
      console.log("recStart, record mode");
      startRecording();
      if (mic === false) {
        console.log("recStart, mic is closed");
        recPause();
      }
    } else if (sectionType === "audio") {
      console.log("recStart, audio mode", audioRef.current);
      audioRef.current.currentTime = player.getCurrentTime() - startSec;
      audioRef.current.play();
    }
    setStartAction(false);
  };

  const handleChange = (file) => {
    console.log("*********", URL.createObjectURL(file[0]));
    setTheFile(URL.createObjectURL(file[0]));
    setNumberOfLastAction(null);
    setSectionType("audio");
    player.seekTo(startSec).pauseVideo();
    audioRef.current.currentTime = 0;
    setControls(1);
  };

  const recResume = () => {
    console.log("recResume");
    setNumberOfLastAction(1);
    if (sectionType === "record") {
      console.log("recResume, record mode");
      if (Math.abs(player.getCurrentTime() - pauseSec) > 1 || mic === false) {
        console.log("recResume, record mode, pause");
        recPause();
      } else {
        console.log("recResume, record mode, resume");
        player.playVideo();
        resumeRecording();
      }
    } else if (sectionType === "audio") {
      console.log("recResume, audio mode");
      // if video over or lower than audio duration
      if (
        player.getCurrentTime() - startSec - 1 > audioRef.current.duration ||
        player.getCurrentTime() < startSec
      ) {
        console.log(
          "recResume, record mode, video over or lower than audio duration, Reset"
        );
        recReset();
        // if audio second not matched the video second
      } else if (
        Math.abs(
          audioRef.current.currentTime - (player.getCurrentTime() - startSec)
        ) > 1
      ) {
        console.log(
          "recResume, record mode, audio second not matched the video second, adjust audio"
        );
        audioRef.current.currentTime = player.getCurrentTime() - startSec;
        recResume();
      } else {
        console.log("recResume, record mode, ok");
        player.playVideo();
        audioRef.current.play();
        console.log(audioRef.current.play());
      }
    }
  };

  const recEnd = () => {
    console.log("recEnd");
    setNumberOfLastAction(3);
    player.seekTo(startSec).pauseVideo();
    if (sectionType === "record") {
      stopRecording();
      setEndSec(Math.floor(player.getCurrentTime()));
      setSectionType("audio");
      setControls(1);
    }
    setStartAction(true);
  };

  const onStateChange = (event) => {
    console.log("step", "0");
    // setTimeout(() => {
    if (dubbingOption == 1 && !theFile && event.data === 1) {
      recPause();
      toast.warn("Please upload your audio", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (dubbingOption == 2 || sectionType === "audio") {
      console.log("step", "1", event.data, numberOfLastAction);

      if (event.data != numberOfLastAction) {
        console.log("step", "2", event.data, numberOfLastAction);

        if (event.data === 1) {
          console.log("step", "4", event.data, numberOfLastAction);
          if (player.getCurrentTime() - startSec < 1) {
            console.log("step", "5", event.data, numberOfLastAction);
            recStart();
          } else {
            console.log("step", "6", event.data, numberOfLastAction);
            recResume();
          }
        } else if (event.data === 2) {
          console.log("step", "7", event.data, numberOfLastAction);
          recPause();
        } else if (event.data === 0) {
          console.log("step", "8", event.data, numberOfLastAction);
          recEnd();
        } else if (
          event.data === 3 &&
          event.target.getCurrentTime() - startSec > 1 &&
          sectionType === "record"
        ) {
          console.log("step", "9", event.data, numberOfLastAction);

          recReset();
        } else if (
          sectionType === "audio" &&
          event.target.getCurrentTime() > 1 &&
          event.data === 3
        ) {
          console.log("step", "10", event.data, numberOfLastAction);

          if (
            player.getCurrentTime() - startSec + 1 >
              audioRef.current.duration ||
            player.getCurrentTime() < startSec
          ) {
            console.log("step", "11", event.data, numberOfLastAction);
            recReset();
          } else {
            console.log(
              "step",
              "12",
              event.data,
              numberOfLastAction,
              audioRef.current.currentTime,
              player.getCurrentTime() - startSec
            );
            audioRef.current.currentTime = player.getCurrentTime() - startSec;
          }
        }
      }
    }
    // }, 100);
  };

  /******** end recFunction  ***********/

  return (
    <div>
      <YouTube
        style={{ height: `calc((${videoWidth} * 100vw) * 0.56)` }}
        opts={option}
        onReady={onReady}
        onStateChange={onStateChange}
        videoId={videoId}
      />
      {dubbingOption === "2" && (
        <div className="buttonContainer">
          {startAction && (
            <button
              className={sectionType !== "record" && "textbutton"}
              onClick={() => recStart()}>
              {sectionType === "record" ? <BiVideoRecording /> : "Test Record"}
            </button>
          )}
          {!startAction && sectionType === "record" && (
            <>
              {numberOfLastAction !== 2 && (
                <button onClick={() => recPause()}>{<BiPauseCircle />}</button>
              )}
              {numberOfLastAction === 2 && (
                <button onClick={() => recResume()}>{<BiPlayCircle />}</button>
              )}
              <button onClick={() => recEnd()}>{<BiStopCircle />}</button>
              <button onClick={() => recReset()}>
                <BiReset />
              </button>
            </>
          )}
          {sectionType === "audio" && dubbingOption === "2" && (
            <button className="textbutton" onClick={() => recordAgain()}>
              Record again
            </button>
          )}
        </div>
      )}

      {dubbingOption === "1" && (
        <div className="uploader">
          <FileUploader
            multiple={true}
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          />
          {/* <p>
                    {file
                      ? `File name: ${file[0].name}`
                      : "no files uploaded yet"}
                    {file && (
                      <audio
                        src={URL.createObjectURL(file[0])}
                        controls
                        ref={audioRef}
                      />
                    )}
                  </p> */}
        </div>
      )}
    </div>
  );
};

export default MainVideo;
