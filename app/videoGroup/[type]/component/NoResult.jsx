"use client";
import React from "react";
import Image from "next/image";
import noResult from "../../../../public/Images/no-search-found.png";
import Wrapper from "./search.styled";

const NoResult = () => {
  return (
    <Wrapper className="imageContainer">
      <Image src={noResult} alt="no result" />
    </Wrapper>
  );
};

export default NoResult;
