"use client";
import React, { useEffect } from "react";
import GlobalStyle from "../styles/globals.js";
import PopUpContainer from "./Globals/PopUpContainer/PopUpContainer.jsx";
import Header from "./Header/Header.jsx";
import PreLoader from "../components/PreLoader/PreLoader";
import { useSelector, useDispatch } from "react-redux";
import { changePreloader } from "../store/slices/style.js";
import { ToastContainer } from "react-toastify";

const MyWrapper = () => {
  const dispatch = useDispatch();
  const currentMode = useSelector((state) => state.style.mode);
  const popUpStatus = useSelector((state) => state.style.popUpContent);
  const preloaderStatus = useSelector((state) => state.style.preloader);

  useEffect(() => {
    dispatch(changePreloader(false));
  }, []);

  return (
    <div>
      <GlobalStyle mode={currentMode} />
      <ToastContainer />

      {preloaderStatus && <PreLoader />}
      <Header />
      <PopUpContainer content={popUpStatus} />
    </div>
  );
};

export default MyWrapper;
