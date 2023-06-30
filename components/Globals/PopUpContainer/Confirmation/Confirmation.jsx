import { useState } from "react";
import Wrapper from "./Confirmation.styled";
import { useDispatch, useSelector } from "react-redux";
import { changePop } from "../../../../store/slices/style";

const Confirmation = ({ title }) => {
  const dispatch = useDispatch();
  const currentFun = useSelector((state) => state.style.confirmationFun);

  return (
    <Wrapper>
      <div className="title"> {title} </div>
      <div className="buttonCont">
        <button
          className="cancel"
          type="button"
          onClick={() => dispatch(changePop(""))}
        >
          Cancel
        </button>
        <button
          className="sure"
          type="button"
          onClick={() => {
            currentFun();
            dispatch(changePop(""));
          }}
        >
          Sure
        </button>
      </div>
    </Wrapper>
  );
};

export default Confirmation;
