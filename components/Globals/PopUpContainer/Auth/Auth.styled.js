import styled from "styled-components";
const Wrapper = styled.div`
  background: var(--white-background);
  padding: 20px;
  border-radius: 10px;

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 21px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: var(--primary-background);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--primary-background);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(37px);
    -ms-transform: translateX(37px);
    transform: translateX(37px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .title {
    color: var(--black-font);
    font-size: var(--largeFont);
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;

    input {
      width: 100%;

      padding: 5px 16px;
      margin-bottom: 3px;
      border-radius: 5px;
      background-color: var(--gradient_1);
      color: var(--black-color);
    }

    button {
      background: var(--primary-background);
      color: white;
      border-radius: 10px;
      padding: 5px 0;
      outline: 1px solid gray;
      border-color: gray;
      font-size: var(--normalFont);
      margin: 4px 0;
      text-transform: uppercase;
      font-weight: bold;
    }
  }

  .switchSec {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    text-transform: capitalize;

    span {
      font-weight: bold;
    }
  }
`;
export default Wrapper;
