import React from "react";
import Wrapper from "./inform.styled";
const Inform = ({ text }) => {
  return (
    <Wrapper>
      <div className="info">{text}</div>
    </Wrapper>
  );
};

export default Inform;
