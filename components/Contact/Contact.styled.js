import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .top {
    text-align: center;
    margin: 50px 10% 20px;

    h1 {
      margin: 2px;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    padding: 15px;
    margin: 10px 0px;
    border-radius: 15px;
    background: var(--gradient_1);
    input {
      padding: 10px;
      padding: 15px;
      margin: 10px 0px;
      border-radius: 15px;
      background: var(--gradient_1);
      color: var(--black-background);
    }

    textarea {
      resize: none;
      height: 200px;
      padding: 15px;
      margin: 10px 0px;
      border-radius: 15px;
      background: var(--gradient_1);
      color: var(--black-background);
    }
    button {
      height: 50px;
      border-radius: 50px;
      margin: 10px 0px;
      border-radius: 15px;
      background: var(--primary-background);
      color: white;
      font-weight: 900;
      font-size: var(--largeFont);
      border-color: var(--gray-background);
      color: white;
    }
  }
`;
export default Wrapper;
