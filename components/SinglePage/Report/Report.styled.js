import styled from "styled-components";
const Wrapper = styled.div`
  background: var(--white-background);
  padding: 10px;
  border-radius: 5px;
  width: 500px;
  margin: auto;
  max-width: 80%;

  .title {
    font-size: var(--largeFont);
    font-weight: bold;
    text-decoration: underline;
    margin-bottom: 5px;
  }

  input[type="radio"] {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid darkgray;
    border-radius: 50%;
    outline: none;
    box-shadow: 0 0 5px 0px gray inset;
  }
  label {
    position: relative;
    top: -2px;
  }
  input[type="radio"]:hover {
    box-shadow: 0 0 5px 0px orange inset;
  }

  input[type="radio"]:before {
    content: "";
    display: block;
    width: 60%;
    height: 60%;
    margin: 24% auto;
    border-radius: 50%;
  }
  input[type="radio"]:checked:before {
    background: var(--primary-background);
  }

  textarea {
    margin-top: 10px;
    width: 100%;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid var(--gradient1);
    resize: none;
    height: 60px;
    background: transparent;
    color: var(--black-background);
  }

  button.commentSubmit {
    width: 100%;
    color: white;
    background-color: var(--primary-background);
    border: none;
    padding: 5px 0;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 5px;
  }
`;
export default Wrapper;
