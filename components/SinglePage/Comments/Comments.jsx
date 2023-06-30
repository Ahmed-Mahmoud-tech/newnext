/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Wrapper from "./Comments.styled";
import { useSelector } from "react-redux";
import useRequest from "../../../axios/apis/useRequest";
import {
  FaThumbsDown,
  FaThumbsUp,
  FaReplyAll,
  FaComments,
} from "react-icons/fa";

const Comments = ({ VideoComments }) => {
  const userInfo = useSelector((state) => state.user.info);

  const generateComment = (
    _id,
    commentUser,
    text,
    comments,
    like,
    dislike,
    isLike,
    isDislike,
    parent
  ) => {
    console.log(isLike, isDislike, "99999999999999999999999999", _id);

    const [subComment, setSubComment] = useState([]);
    const [showComment, setShowComment] = useState(false);
    const [requestCommentId, setRequestCommentId] = useState(false);
    const [likeState, setLikeState] = useState(0);
    const [replay, setReplay] = useState(false);
    const [commentsCount, setCommentsCount] = useState(comments.length);
    const [likeCount, setLikeCount] = useState(like);
    const [dislikeCount, setDislikeCount] = useState(dislike);
    const [replayText, setReplayText] = useState("");
    const { getComments, addComment, editComment } = useRequest();

    useEffect(() => {
      if (isLike) {
        setLikeState(1);
      }
      if (isDislike) setLikeState(-1);
    }, [VideoComments]);

    const likeFun = () => {
      if (likeState != 1) {
        setLikeState(1);
        editComment({ url: _id, data: { like: "add" } });
        setLikeCount(likeCount + 1);
        likeState == -1 && setDislikeCount(dislikeCount - 1);
      } else {
        setLikeState(0);
        editComment({ url: _id, data: { like: "remove" } });
        setLikeCount(likeCount - 1);
      }
      // send request increase or decrease
    };
    const disLikeFun = () => {
      likeState === 1 && console.log("remove Like");
      if (likeState != -1) {
        setLikeState(-1);
        editComment({ url: _id, data: { dislike: "add" } });
        setDislikeCount(dislikeCount + 1);
        likeState == 1 && setLikeCount(likeCount - 1);
      } else {
        setLikeState(0);
        editComment({ url: _id, data: { dislike: "remove" } });
        setDislikeCount(dislikeCount - 1);
      }
      // send request increase or decrease
    };

    const getCommentsRequest = async () => {
      if (!requestCommentId) {
        const result = await getComments(
          `${!userInfo.username ? "notAuth/comment" : "comment"}/${_id}`
        );
        setSubComment(result.data);
        setRequestCommentId(true);
      }
      setShowComment(!showComment);
    };
    const sumitForm = async (e) => {
      e.preventDefault();
      if (replayText.trim()) {
        await addComment({
          type: "comment",
          commentOn: _id,
          text: replayText,
        });
        setCommentsCount(commentsCount + 1);
        const result = await getComments(
          `${!userInfo.username ? "notAuth/comment" : "comment"}/${_id}`
        );
        setSubComment(result.data);
      }
      // setRequestCommentId(false);

      setReplay(false);
      setReplayText("");
    };

    return (
      <div
        className="commentWrapper"
        style={{ marginLeft: parent ? "0" : "-30px" }}>
        <div className="pic" style={{ minWidth: parent ? 50 : 40 }}>
          <Image
            src={commentUser.avatar}
            alt={"author"}
            width={parent == true ? 45 : 40}
            height={parent == true ? 45 : 40}
          />
          {console.log({ parent })}
        </div>
        <div className="info">
          <div className="name">{commentUser.username}</div>
          <div className="comment">{text}</div>
          <div className="action">
            <div className="clickAction">
              <span
                className="like"
                onClick={() => likeFun()}
                style={{
                  color: likeState === 1 && "var(--primary-background)",
                }}>
                <FaThumbsUp />
                <span className="number">{likeCount}</span>
              </span>
              <span
                className="disLike"
                onClick={() => disLikeFun()}
                style={{
                  color: likeState === -1 && "var(--primary-background)",
                }}>
                <FaThumbsDown />
                <span className="number">{dislikeCount}</span>
              </span>
              <span
                className="replay"
                onClick={() => setReplay(!replay)}
                style={{ color: replay && "var(--primary-background)" }}>
                <FaReplyAll />
                <span className="number">Replay</span>
              </span>
              {(comments?.length != "0" || subComment?.length != "0") && (
                <span
                  className="comments"
                  onClick={getCommentsRequest}
                  style={{
                    color: showComment && "var(--primary-background)",
                  }}>
                  <FaComments />
                  <span className="number">Comments: {commentsCount}</span>
                </span>
              )}
            </div>

            {replay && (
              <div className="replayForm">
                <form action="" onSubmit={sumitForm}>
                  <textarea
                    type="text"
                    value={replayText}
                    onChange={(e) => setReplayText(e.target.value)}
                    placeholder="Replay"
                  />
                  <button type="submit" className="replayButton">
                    Submit
                  </button>
                </form>
              </div>
            )}

            {subComment.length > 0 && showComment && (
              <div className="comments">
                {subComment.map((comment, index) => (
                  <Comments
                    key={index}
                    VideoComments={{
                      _id: comment._id,
                      commentUser: comment.commentUser,
                      text: comment.text,
                      comments: comment.comments,
                      like: comment.like,
                      dislike: comment.dislike,
                      isLike: comment.isLike,
                      isDislike: comment.isDislike,
                      parent: false,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Wrapper>
      {generateComment(
        VideoComments._id,
        VideoComments.commentUser,
        VideoComments.text,
        VideoComments.comments,
        VideoComments.like,
        VideoComments.dislike,
        VideoComments.isLike,
        VideoComments.isDislike,
        VideoComments.parent
      )}
    </Wrapper>
  );
};

export default Comments;
