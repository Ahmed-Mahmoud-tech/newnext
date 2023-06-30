import React, { useEffect } from "react";
import Wrapper from "./UploadForm.styled";
import AddInput from "../../Globals/AddInput/AddInput";
import { useState, useRef } from "react";
import { useOutside } from "../../../utilities/main";
import { useFormik } from "formik";
import useRequest from "../../../axios/apis/useRequest";

import * as Yup from "yup";

const UploadForm = ({ closeFun, creationData, values = null }) => {
  const close = useRef();
  const { addVideo, userList } = useRequest();
  const [list, setList] = useState([]);
  const [tag, setTag] = useState([]);
  useOutside(close, closeFun);

  const languages = [
    "Arabic",
    "English",
    "Mandarin",
    "Hindi",
    "Spanish",
    "German",
    "Telugu",
    "Italian",
    "Bengali",
    "Russian",
    "Portuguese",
    "Indonesian",
    "Urdu",
    "Japanese",
    "Punjabi",
    "Javanese",
    "Wu",
    "Turkish",
    "Korean",
    "Marathi",
  ];

  const categories = [
    "Education",
    "Science & Technology",
    "Film & Animation",
    "Autos & Vehicles",
    "Music",
    "Pets & Animals",
    "Sports",
    "Travel & Events",
    "Gaming",
    "People & Blogs",
    "Comedy",
    "Entertainment",
    "News & Politics",
  ];

  const formik = useFormik({
    initialValues: {
      title: values ? values.title : "",
      description: values ? values.description : "",
      notify: values ? values.notify : "",
      dubbingLanguage: values ? values.dubbingLanguage : "",
      videoLanguage: values ? values.videoLanguage : "",
      category: values ? values.category : "",
      list: values ? values.list : "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required!"),
      description: Yup.string().required("Required!"),
      notify: Yup.string().required("Required!"),
      dubbingLanguage: Yup.string().required("Required!"),
      videoLanguage: Yup.string().required("Required!"),
      category: Yup.string().required("Required!"),
      // list: Yup.string().required("Required!"),
    }),
    onSubmit: async (values) => {
      values.tag = tag;
      const finalData = { ...values, ...creationData };
      await console.log("send video Data", { finalData });
      const formData = new FormData();
      Object.keys(finalData).map((key, index) => {
        formData.append(key, finalData[key]);
      });
      addVideo(formData);
      // axios
      //   .post("http://localhost:5000/api/video", formData)
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
  });

  useEffect(() => {
    (async () => {
      const list = await userList();
      setList(list.data);
    })();
  }, []);

  return (
    <Wrapper>
      <div className="upForm" ref={close}>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="inputWrapper">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="title"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            {formik.errors.title && formik.touched.title && (
              <p>{formik.errors.title}</p>
            )}
          </div>

          <div className="inputWrapper">
            <textarea
              name="description"
              id="description"
              placeholder="description"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
            {formik.errors.description && formik.touched.description && (
              <p>{formik.errors.description}</p>
            )}
          </div>

          <div className="inputWrapper">
            <select
              name="videoLanguage"
              id="videoLanguage"
              value={formik.values.videoLanguage}
              onChange={formik.handleChange}>
              <option value="">Video Language</option>
              {languages.map((value, index) => (
                <option value={index} key={index}>
                  {value}
                </option>
              ))}
            </select>
            {formik.errors.videoLanguage && formik.touched.videoLanguage && (
              <p>{formik.errors.videoLanguage}</p>
            )}
          </div>
          {console.log(creationData.type)}
          {creationData.type != 0 && (
            <div className="inputWrapper">
              <select
                name="dubbingLanguage"
                id="dubbingLanguage"
                value={formik.values.dubbingLanguage}
                onChange={formik.handleChange}>
                <option value="" disabled>
                  Dubbing Language
                </option>
                {languages.map((value, index) => (
                  <option value={index} key={index}>
                    {value}
                  </option>
                ))}
              </select>
              {formik.errors.dubbingLanguage &&
                formik.touched.dubbingLanguage && (
                  <p>{formik.errors.dubbingLanguage}</p>
                )}
            </div>
          )}
          <div className="inputWrapper">
            <select
              name="category"
              id="category"
              value={formik.values.category}
              onChange={formik.handleChange}>
              <option value="">Category</option>
              {categories.map((value, index) => (
                <option value={index} key={index}>
                  {value}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
            {formik.errors.category && formik.touched.category && (
              <p>{formik.errors.category}</p>
            )}
          </div>

          <div className="inputWrapper">
            <select
              name="list"
              id="list"
              value={formik.values.list}
              onChange={formik.handleChange}>
              <option value="">list</option>
              {Object.keys(list).map((value, index) => (
                <option value={list[value]} key={index}>
                  {value}
                </option>
              ))}
            </select>

            {formik.errors.list && formik.touched.list && (
              <p>{formik.errors.list}</p>
            )}
          </div>
          <div className="inputWrapper">
            <h6>
              This notification will be displayed before the video you should
              add the important information if exist
            </h6>
            <textarea
              name="notify"
              id="notify"
              placeholder="notification"
              value={formik.values.notify}
              onChange={formik.handleChange}
            />
            {formik.errors.notify && formik.touched.notify && (
              <p>{formik.errors.notify}</p>
            )}
          </div>
          <div className="inputWrapper">
            <AddInput items={tag} setItems={setTag} name="tag" />
          </div>

          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default UploadForm;
