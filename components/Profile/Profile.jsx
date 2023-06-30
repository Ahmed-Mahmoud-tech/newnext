"use client";
import { useEffect, useState } from "react";
import Wrapper from "./Profile.styled";
import { useFormik } from "formik";
import * as Yup from "yup";
import Avatar from "./Avatar/Avatar";
import useRequest from "../../axios/apis/useRequest";
import { useSelector } from "react-redux";

const Profile = () => {
  const [avatar, setAvatar] = useState("");
  const userInfo = useSelector((state) => state.user.info);

  const notificationStatus = (type) => {
    return userInfo.notification ? userInfo.notification.includes(type) : false;
  };

  const [subscribe, setSubscribe] = useState(true);
  const [recommended, setRecommended] = useState(true);
  const [interaction, setInteraction] = useState(true);
  const [replay, setReplay] = useState(true);

  const phoneRegExp = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3,7})$/;

  const { profileData } = useRequest();

  const formik = useFormik({
    initialValues: {
      username: userInfo.username ? userInfo.username : "",
      fullName: userInfo.fullName ? userInfo.fullName : "",
      phone: userInfo.phone ? userInfo.phone : "",
      email: userInfo.email ? userInfo.email : "",
      age: userInfo.age ? userInfo.age : "",
      gender: userInfo.gender ? userInfo.gender : "",
      password: userInfo.password ? userInfo.password : "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required!"),
      fullName: Yup.string().required("Required!"),
      phone: Yup.string()
        .required("Required!")
        .matches(phoneRegExp, "Phone number is not valid"),
      email: Yup.string().required("Required!").email("This mail is not valid"),
      age: Yup.number("Must be a number")
        .required("Required!")
        .test(
          "valid age",
          "Must be between 7 and 100",
          (value) => parseInt(value) > 6 && parseInt(value) < 101
        ),
      gender: Yup.string().required("Required!"),
      password: Yup.string().min(8).max(22),
    }),
    onSubmit: (values) => {
      const notification = {
        subscribe,
        recommended,
        interaction,
        replay,
      };

      const permission = [];

      for (const [key, value] of Object.entries(notification)) {
        if (value) {
          permission.push(key);
        }
      }

      values.notification = permission;

      values.avatar = avatar;

      const formData = new FormData();
      Object.keys(values).map((key, index) => {
        formData.append(key, values[key]);
      });

      profileData({ userId: userInfo?._id, info: formData });
    },
  });

  useEffect(() => {
    formik.setValues({
      username: userInfo.username ? userInfo.username : "",
      fullName: userInfo.fullName ? userInfo.fullName : "",
      phone: userInfo.phone ? userInfo.phone : "",
      email: userInfo.email ? userInfo.email : "",
      age: userInfo.age ? userInfo.age : "",
      gender: userInfo.gender ? userInfo.gender : "",
      password: userInfo.password ? userInfo.password : "",
    });

    setSubscribe(notificationStatus("subscribe"));
    setRecommended(notificationStatus("recommended"));
    setInteraction(notificationStatus("interaction"));
    setReplay(notificationStatus("replay"));
  }, [userInfo]);

  return (
    <Wrapper>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="dataWrapper">
          <div className="userInfo">
            <h4>Personal Information:</h4>

            <div className="personal">
              <Avatar
                setAvatar={setAvatar}
                oldImage={userInfo.avatar ? userInfo.avatar : ""}
              />
              <div className="textInputs">
                <div className="inputWrapper">
                  <input
                    type="text"
                    name="username"
                    placeholder="User Name"
                    id="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                  />

                  {formik.errors.username && formik.touched.username && (
                    <p>{formik.errors.username}</p>
                  )}
                </div>
                <div className="inputWrapper">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    id="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                  />

                  {formik.errors.fullName && formik.touched.fullName && (
                    <p>{formik.errors.fullName}</p>
                  )}
                </div>
                <div className="inputWrapper">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    id="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.phone && formik.touched.phone && (
                    <p>{formik.errors.phone}</p>
                  )}
                </div>
                <div className="inputWrapper">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p>{formik.errors.email}</p>
                  )}
                </div>
                <div className="inputWrapper">
                  <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    id="age"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.age && formik.touched.age && (
                    <p>{formik.errors.age}</p>
                  )}
                </div>
                <div className="inputWrapper">
                  <select
                    name="gender"
                    id="gender"
                    value={formik.values.gender}
                    onChange={formik.handleChange}>
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>

                  {formik.errors.gender && formik.touched.gender && (
                    <p>{formik.errors.gender}</p>
                  )}
                </div>
                <div className="inputWrapper">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password && formik.touched.password && (
                    <p>{formik.errors.password}</p>
                  )}
                </div>
              </div>
            </div>

            <h4>Notification Permission:</h4>
            <div className="notification">
              <label className="container">
                Channels you subscribe
                <input
                  type="checkbox"
                  checked={subscribe}
                  name="subscribe"
                  onChange={() => setSubscribe(!subscribe)}
                />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                Recommended videos
                <input
                  type="checkbox"
                  checked={recommended}
                  name="recommended"
                  onChange={() => setRecommended(!recommended)}
                />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                Interaction on your videos
                <input
                  type="checkbox"
                  checked={interaction}
                  name="interaction"
                  onChange={() => setInteraction(!interaction)}
                />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                Replay on your comments
                <input
                  type="checkbox"
                  checked={replay}
                  name="replay"
                  onChange={() => setReplay(!replay)}
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </Wrapper>
  );
};

export default Profile;
