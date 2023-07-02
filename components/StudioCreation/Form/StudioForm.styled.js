import styled from "styled-components";
const Wrapper = styled.div`
  .upForm {
    width: 90%;
    margin: auto;
    padding: 5px;
    border: 1px solid var(--gradient1);
    border-radius: 5px;
  }
  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-height: calc(100vh - 200px);
    overflow-y: auto;

    .inputWrapper {
      width: 100%;
      text-align: center;
      margin: 0.5%;
      background: var(--gradient_2);
      border-radius: 5px;

      p {
        color: red;
        font-size: var(--smallFont);
      }

      .realTime {
        text-align: left;
        margin: 10px 5px 5px;
      }

      .timeWrapper {
        display: flex;
        justify-content: space-between;
        > div {
          width: 49.6%;
        }
      }

      input,
      textarea,
      select {
        width: 100%;
        padding: 10px;
        background: transparent;
        color: var(--black-background);
        border: 1px solid var(--gradient0);
        border-radius: 5px;
      }

      textarea {
        resize: none;
        height: 100px;
      }

      option {
        color: var(--black-color);
        background: var(--white-background);
      }

      input {
        color: var(--black-color);
      }

      .withButton {
        display: flex;
        border: 1px solid var(--gradient0);

        border-radius: 5px;
        overflow: hidden;
        input {
          border: 0;
        }

        button {
          font-size: var(--largeFont);
          padding: 5px;
          border-radius: 0;
          outline: 0;
          border: 0;
          background: var(--primary-background);
          cursor: pointer;
          color: white;
          border-left: 1px solid var(--gradient0);
        }
      }
    }

    .finish {
      background: var(--primary-background);
      color: white;
      padding: 10px 25px;
      border-radius: 5px;
      margin: 15px;
      font-size: var(--largeFont);
      border: 0;
      cursor: pointer;

      &:hover {
        color: black;
      }
    }
  }
`;
export default Wrapper;
