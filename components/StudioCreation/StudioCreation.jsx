"use client";
import { useReactMediaRecorder } from "react-media-recorder";
import { useEffect, useState } from "react";
import { useRef } from "react";
import StudioForm from "./Form/StudioForm";
import Wrapper from "./StudioCreation.styled";
import Inform from "../Globals/Inform/Inform";
import UploadForm from "./UploadForm/UploadForm";

// acquiring_media
import MainVideo from "./MainVideo/MainVideo";

const StudioCreation = ({
  serverAudio = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
}) => {
  const {
    status,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ video: false });

  const [videoWidth, setVideoWidth] = useState(0.6);
  const [videoId, setVideoId] = useState("");
  const [player, setPlayer] = useState();
  const [startSec, setStartSec] = useState(0);
  const [endSec, setEndSec] = useState();
  const [controls, setControls] = useState(1);
  const [sectionType, setSectionType] = useState("record");
  const [numberOfLastAction, setNumberOfLastAction] = useState();
  const [dubbingOption, setDubbingOption] = useState();
  const [videoTitle, setVideoTitle] = useState("");
  const [startAction, setStartAction] = useState(true);
  const [audioRef, setAudioRef] = useState();
  const [theFile, setTheFile] = useState(mediaBlobUrl);
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: { controls: controls, end: endSec, start: startSec },
  };
  const [option, setOption] = useState(opts);
  const [finish, setFinish] = useState(false);
  const [videoDuration, setVideoDuration] = useState(false);
  const [creationData, setCreationData] = useState({});
  const [mic, setMic] = useState(false);
  const [pauseSec, setPauseSec] = useState();
  const recordAudioRef = useRef();
  const serverAudioRef = useRef();
  const uploadSrcRef = useRef();

  const closeFun = () => {
    setFinish(false);
  };

  // end second
  useEffect(() => {
    opts.playerVars.end = endSec;
    // setNumberOfLastAction(0);
    setOption(opts);
  }, [endSec]);

  // start second
  useEffect(() => {
    opts.playerVars.start = startSec;
    setOption(opts);
    player && recReset();
    if (dubbingOption === "2") player && setSectionType("record");
    // // uploadSrcRef.current.currentSrc = "";
    // uploadSrcRef.current.getAttribute("src") &&
    //   uploadSrcRef.current.setAttribute("src", "");
    // console.log(uploadSrcRef.current.getAttribute("src"), "uploadSrcRef");

    // setTheFile("");
  }, [startSec]);

  useEffect(() => {
    window.innerWidth < 768 && setVideoWidth(1);
  }, []);

  // change dubbing Option
  useEffect(() => {
    if (player) {
      recReset();
      setSectionType("record");
      setControls(0);
      setEndSec();
      setStartSec(0);
      if (dubbingOption == 2) {
        console.log("object");
        micFun();
      }

      if (dubbingOption == 7) {
        setAudioRef(serverAudioRef);
        setSectionType("audio");
      } else if (dubbingOption == 1) {
        setAudioRef(uploadSrcRef);
      } else {
        console.log("recstart", "0000000000");
        setAudioRef(recordAudioRef);
      }
    }
    setTheFile();
  }, [dubbingOption]);

  const recReset = () => {
    console.log("recReset");

    player.seekTo(startSec);
    if (sectionType === "record") {
      console.log("recReset, record");
      setNumberOfLastAction(null);
      stopRecording();
    } else if (sectionType === "audio") {
      console.log("recReset, record ");
      audioRef.current.currentTime = 0;
    }
    setStartAction(true);
    recPause();
  };
  const recPause = () => {
    console.log("recPause");
    setNumberOfLastAction(2);
    player.pauseVideo();
    setPauseSec(player.getCurrentTime());
    if (sectionType === "record") {
      console.log("recPause, record mode");
      pauseRecording();
    } else if (sectionType === "audio") {
      console.log("recPause, audio mode");
      audioRef.current.pause();
    }
  };

  // mic validation
  const micConditions = (permission) => {
    if (permission.state === "granted") {
      setMic(true);
      // OK - Access has been granted to the microphone
    } else if (permission.state === "denied") {
      console.log(permission.state, "2", "search");
      setMic(false);
      // KO - Access has been denied. Microphone can't be used
    } else {
      console.log(permission.state, "3", "search");
      navigator.mediaDevices.getUserMedia({ video: false, audio: true });
      // Permission should be asked
    }
  };

  const micFun = async () => {
    const permission = await navigator.permissions.query({
      name: "microphone",
    });
    micConditions(permission);
    permission.onchange = () => {
      console.log("changed", permission.state, "search");
      micConditions(permission);
      // React when the permission changed
    };
  };

  /*************  end main video function  ************/
  return (
    <Wrapper>
      <div className="creationWrapper">
        <div className="formCont">
          <StudioForm
            videoTitle={videoTitle}
            setVideoId={setVideoId}
            setDubbingOption={setDubbingOption}
            dubbingOption={dubbingOption}
            setEndSec={setEndSec}
            setStartSec={setStartSec}
            recordAudio={recordAudioRef}
            uploadSrc={uploadSrcRef}
            setFinish={setFinish}
            setCreationData={setCreationData}
            videoDuration={videoDuration}
          />
        </div>
        <div className="factory">
          <div className="videoContainer">
            <MainVideo
              videoWidth={videoWidth}
              dubbingOption={dubbingOption}
              option={option}
              videoId={videoId}
              player={player}
              setPlayer={setPlayer}
              theFile={theFile}
              setTheFile={setTheFile}
              audioRef={audioRef}
              startSec={startSec}
              setVideoTitle={setVideoTitle}
              sectionType={sectionType}
              setSectionType={setSectionType}
              setVideoDuration={setVideoDuration}
              numberOfLastAction={numberOfLastAction}
              setNumberOfLastAction={setNumberOfLastAction}
              startAction={startAction}
              setStartAction={setStartAction}
              setControls={setControls}
              setEndSec={setEndSec}
              mic={mic}
              recReset={recReset}
              recPause={recPause}
              pauseSec={pauseSec}
              startRecording={startRecording}
              stopRecording={stopRecording}
              resumeRecording={resumeRecording}
            />
          </div>

          <audio
            src={theFile && theFile}
            controls
            ref={uploadSrcRef}
            style={{ display: "none" }}
          />
          <audio
            src={mediaBlobUrl}
            controls
            ref={recordAudioRef}
            style={{ display: "none" }}
          />
          <audio
            src={serverAudio}
            controls
            ref={serverAudioRef}
            style={{ display: "none" }}
          />
        </div>
      </div>
      {!mic && dubbingOption === "2" && (
        <Inform text="Access the microphone, please" />
      )}
      {/* {uploadFirst && <Inform text="please upload your audio" />} */}
      {finish && <UploadForm closeFun={closeFun} creationData={creationData} />}
    </Wrapper>
  );
};

export default StudioCreation;
