import React from "react";
import Wrapper from "./Related.styled";
import Block from "../../BlockContainer/Block/Block";
const Related = ({ videos, username, avatar, remove }) => {
  return (
    <Wrapper>
      {videos?.map((block, index) => {
        if (!block.username) block.username = username;
        if (!block.avatar) block.avatar = avatar;
        if (block.remove === undefined) block.remove = remove;
        return <Block {...block} key={index} />;
      })}
    </Wrapper>
  );
};

export default Related;
