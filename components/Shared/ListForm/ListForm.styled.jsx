import styled from "styled-components";
export const Wrapper = styled.div`
  .listForm {
    width: 90%;
    margin: auto;
    padding: 5px;
    border: 1px solid var(--gradient1);
    border-radius: 5px;
    margin-top: 10px;
    display: flex;

    .listInputWrapper {
      width: 100%;
    }
    input {
      margin: 2px;

      width: 100%;
      padding: 10px;
      background: transparent;
      color: var(--black-background);
      border: 1px solid var(--gradient0);
      border-radius: 5px;
    }

    button {
      font-size: var(--largeFont);
      padding: 5px;
      border-radius: 5px;
      outline: 0;
      border: 0;
      background: var(--primary-background);
      cursor: pointer;
      color: white;
      border-left: 1px solid var(--gradient0);
      margin-left: 5px;
    }
  }
`;
