import styled from "styled-components";
const Wrapper = styled.div`
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;

  form {
    .dataWrapper {
      display: flex;
    }
    h4 {
      font-size: var(--largeFont);
      margin-bottom: 20px;
      color: var(--primary-background);
      border-bottom: 2px solid var(--black-background);
      max-width: max-content;
      padding-bottom: 5px;
    }

    button {
      background: var(--primary-background);
      color: white;
      padding: 5px 30px;
      font-size: var(--largeFont);
      border-radius: 5px;
      margin: 25px auto;
      border: none;
      cursor: pointer;
      &:hover {
        background: var(--black-background);
        color: var(--primary-background);
      }
    }
  }
  .personal {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
    .textInputs {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .inputWrapper {
      flex-basis: 50%;

      p {
        font-size: var(--smallFont);
        text-align: center;
        color: var(--primary-background);
      }

      input,
      select {
        width: 90%;
        min-width: 250px;
        margin: 5px 5%;
        padding: 15px;
        border: 1px solid var(--gradient_1);
        box-shadow: 1px 1px 4px 1px var(--gradient_1);
        background: var(--white-background);
        color: var(--black-color);
      }
    }
  }

  .notification {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  /* The container */
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    width: 250px;
    cursor: pointer;
    font-size: var(--normalFont);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: var(--primary-background);
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export default Wrapper;
