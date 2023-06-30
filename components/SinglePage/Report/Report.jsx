import React, { useEffect } from "react";
import Wrapper from "./Report.styled";
import { useState, useRef } from "react";
import { changePop } from "../../../store/slices/style";
import { useDispatch } from "react-redux";
import useRequest from "../../../axios/apis/useRequest";

const Report = ({ userId, videoId, reportId }) => {
  const [commentText, setCommentText] = useState();
  const [selectedValue, setSelectedValue] = useState();

  useEffect(() => {
    if (reportId) {
      const reportData = getReport(reportId);
      reportData.then((d) => {
        setSelectedValue(d.data.reason);
        setCommentText(d.data.comment);
      });
    }
  }, []);

  const dispatch = useDispatch();
  const { addReport, editReport, getReport } = useRequest();
  const report = useRef();
  const sumitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(report.current);
    const reportRadio = formData.get("report");

    if (commentText.trim()) {
      if (reportId) {
        editReport({
          url: reportId,
          data: { comment: commentText, reason: reportRadio },
        });
      } else {
        addReport({
          comment: commentText,
          video: videoId,
          author: userId,
          reason: reportRadio,
        });
      }
    }

    dispatch(changePop(""));
    setCommentText("");
  };

  const radioData = [
    {
      text: "Sexual content",
      id: "Sexual",
    },
    {
      text: "Violent or repulsive conten",
      id: "Violent",
    },
    {
      text: "Hateful or abusive content",
      id: "abusive",
    },
    {
      text: "Harassment or bullying",
      id: "Harassment",
    },
    {
      text: "Harmful or dangerous acts",
      id: "dangerous",
    },
    {
      text: "Misinformation",
      id: "Misinformation",
    },
    {
      text: "Child abuse",
      id: "Child",
    },
    {
      text: "Promotes terrorism",
      id: "Promotes",
    },
    {
      text: "Spam or misleading",
      id: "Spam",
    },
    {
      text: "Infringes my rights",
      id: "Infringes",
    },
  ];
  return (
    <Wrapper>
      <div className="title">The reason for the report</div>
      <form action="" onSubmit={sumitForm} ref={report}>
        {radioData.map((item, index) => (
          <div className="inputWrapper" key={index}>
            <input
              type="radio"
              name="report"
              id={item.id}
              defaultValue={item.id}
              checked={selectedValue === item.id}
              onChange={(e) => setSelectedValue(e.target.value)}
            />
            <label htmlFor={item.id}>{item.text}</label>
          </div>
        ))}

        <textarea
          type="text"
          name="comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add your Comment..."
        />
        <button type="submit" className="commentSubmit">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Report;
