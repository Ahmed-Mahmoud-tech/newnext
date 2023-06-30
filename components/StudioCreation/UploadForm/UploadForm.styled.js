import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  top: 0;
  left: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  justify-content: center;
  align-items: center;
  background: var(--gradient1);

  .mt {
    margin-top: 10px;
  }

  .upForm {
    background: var(--white-background);
    width: 320px;
    min-width: 40vw;
    max-width:500px
    margin: auto;
    padding: 15px;
    border-radius: 5px;
  }

  form {
    padding: 5px;
    border: 1px solid var(--gradient1);
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-height: calc(100vh - 200px);
    overflow-y: auto;
    overflow-x: hidden;
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
h6 {
    margin: 3px 0;
}

      input,
      textarea,
      select {
        width: 100%;
        padding: 10px;
        background: transparent;
        color: var(--black-background);
      }

      textarea {
        resize: none;
        height: 100px;
      }

      option {
        color: var(--black-color);
        background: var(--white-background);
      }

      > input,
      > select,
      textarea {
        border: 1px solid var(--gradient0);
        border-radius: 5px;
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

    button.submit {
    background: var(--primary-background);
    color: white;
    border: 0;
    padding: 5px 30px;
    border-radius: 5px;
    font-size: var(--largeFont);
    margin-bottom: 20px;
    cursor:pointer;
}

  }
`;
export default Wrapper;
