"use client";
import React from "react";
import Wrapper from "./Block.styled";
import Image from "next/image";
import { FaRegEye, FaPlay } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { BiLike, BiStopwatch, BiShare, BiListCheck } from "react-icons/bi";
import { useDispatch } from "react-redux";
import useRequest from "../../../axios/apis/useRequest";

import {
  changePop,
  changeMessage,
  changeConfirmationFun,
} from "../../../store/slices/style";
import Link from "next/link";

const Block = ({
  videoLength = 0,
  remove,
  like,
  views,
  avatar,
  title,
  username,
  updatedAt,
  videoLink,
  videoImage,
  description,
  _id,
}) => {
  const dispatch = useDispatch();
  const { deleteVideo } = useRequest();
  const removeVideo = () => {
    deleteVideo(_id);
  };
  const removeList = () => {
    console.log("remove list");
  };

  const showPop = (type) => {
    if (type === "video") {
      dispatch(changeConfirmationFun(removeVideo));
      dispatch(changePop("confirmation"));
      dispatch(changeMessage("Are you sure to remove this video?"));
    } else {
      dispatch(changeConfirmationFun(removeList));
      dispatch(changePop("confirmation"));
      dispatch(changeMessage("Are you sure to remove this list?"));
    }
  };

  return (
    <Wrapper>
      {remove}
      <div className="imageContainer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div className="videoImage">
          {videoLength > 0 && (
            <>
              <Link href={`/singleVideo/${_id}`} className="blockLink"></Link>

              <div className="listNumber">
                {videoLength}
                <BiListCheck />
                {remove && (
                  <div
                    className="infoWrapper delete"
                    onClick={() => showPop("list")}>
                    <MdOutlineDelete />
                  </div>
                )}
              </div>
            </>
          )}
          {videoLength == 0 && (
            <div className="placeHolder">
              <Link href={`/singleVideo/${_id}`} className="blockLink"></Link>

              {/* <div className="infoWrapper">
                <BiShare /> <span className="word">share</span>
                <span className="number">{share}</span>
              </div> */}
              <div className="last infoWrapper">
                <span className="later infoWrapper">
                  <BiStopwatch /> <span className="word">watch later</span>
                </span>
                <span className="play">
                  <FaPlay />
                </span>
              </div>
              {remove && (
                <div
                  className="infoWrapper delete"
                  onClick={() => showPop("video")}>
                  <MdOutlineDelete /> <span className="word">Delete</span>
                  <span className="number"></span>
                </div>
              )}
            </div>
          )}

          <Image
            src={videoImage}
            // src={"https://img.youtube.com/vi/UB-xp3BqgQE/maxresdefault.jpg"}
            alt="videoAlt"
            crossOrigin="anonymous"
            fill
          />
        </div>
      </div>
      <div className="details">
        <div className="avatar">
          <Image src={avatar} alt="profile" fill />
        </div>
        <div className="info">
          <h4 className="videoTitle">{title}</h4>
          <span className="channel">{username}</span>

          {videoLength == 0 ? (
            <>
              <span className="date">
                {updatedAt?.toString().substring(0, 10)}
              </span>

              <div className="attractive">
                <a
                  href={videoLink}
                  target="_blank"
                  className="nativeVideo"
                  rel="noreferrer">
                  native video
                </a>
                <div className="like">
                  <BiLike />
                  <span className="number">{like}</span>
                </div>

                <div className="views">
                  <FaRegEye />
                  <span className="number">{views}</span>
                </div>
              </div>
            </>
          ) : (
            <div className="desc">{description}</div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Block;
