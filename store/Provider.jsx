"use client";
import React from "react";
import { Provider as Pro } from "react-redux";
import { store } from "./store";

const Provider = ({ children }) => {
  return <Pro store={store}>{children}</Pro>;
};

export default Provider;
