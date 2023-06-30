"use client";
import React from "react";
import Wrapper from "./Contact.styled";

const contact = () => {
  return (
    <Wrapper>
      <div className="top">
        <h1>Contact Us</h1>
        <p>
          We are always interested in your suggestions and in resolving your
          complaint as soon as possible. Do not hesitate to contact us
        </p>
      </div>

      <form>
        <input type="text" name="title" id="" />
        <textarea name="message" />
        <button type="submit">Submit</button>
      </form>
    </Wrapper>
  );
};

export default contact;
