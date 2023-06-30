import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaTelegramPlane,
  FaLinkedinIn,
  FaTwitter,
  FaRedditAlien,
} from "react-icons/fa";
import Wrapper from "./share.styled";

const Share = () => {
  return (
    <Wrapper>
      <a href="">
        <FaFacebookF />
      </a>
      <a href="">
        <FaWhatsapp />
      </a>
      <a href="">
        <FaInstagram />
      </a>
      <a href="">
        <FaTiktok />
      </a>
      <a href="">
        <FaTelegramPlane />
      </a>
      <a href="">
        <FaLinkedinIn />
      </a>
      <a href="">
        <FaTwitter />
      </a>
      <a href="">
        <FaRedditAlien />
      </a>
    </Wrapper>
  );
};

export default Share;
