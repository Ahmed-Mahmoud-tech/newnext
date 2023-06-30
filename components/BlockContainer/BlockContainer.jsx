"use client";
import React from "react";
import Wrapper from "../BlockContainer/BlockContainer.styled";

const BlockContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default BlockContainer;
