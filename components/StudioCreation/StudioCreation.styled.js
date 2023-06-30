import styled from "styled-components";
const Wrapper = styled.div`
  .title {
    font-size: var(--hugeFont);
    margin: 30px auto 20px;
    width: 300px;
    max-width: 90%;
    text-align: center;
    border-bottom: 4px solid var(--primary-background);
  }

  .creationWrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }

  .factory {
    width: 60%;
    @media (max-width: 768px) {
      width: 100%;
      margin: 15px;
    }
  }

  .formCont {
    width: 35%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .uploader {
    margin-top: 5px;
    label {
      max-width: 100%;
      margin-bottom: 5px;
    }
    audio {
      display: none;
    }
    p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .buttonContainer button:hover {
    box-shadow: 1px 1px 5px 1px #838383;
  }
  .buttonContainer {
    display: flex;
    justify-content: center;

    button {
      background: var(--gradient_1);
      /* background: var(--black-background); */
      border: 0;
      color: var(--primary-background);
      padding: 5px 10px;
      margin: 10px 10px;
      border-radius: 5px;
      font-size: var(--hugeFont);
      cursor: pointer;
      display: flex;
    }

    .textbutton {
      font-size: var(--normalFont);
      font-weight: bold;
    }
  }
`;
export default Wrapper;
