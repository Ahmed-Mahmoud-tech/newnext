import styled from "styled-components";
const Wrapper = styled.div`
  border-bottom: 1px solid var(--gradient_1);
  margin-bottom: 30px;
  padding-bottom: 15px;
  .commentWrapper {
    display: flex;
    margin-top: 10px;
    align-items: center;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 10px;

    .info {
      max-width: calc(100% - 50px);
      width: 100%;
    }

    .name {
      font-size: var(--normalFont);
      font-weight: bold;
      margin-bottom: 5px;
    }

    .comment {
      font-size: var(--normalFont);
      line-height: var(--normalFont);
      margin-bottom: 5px;
    }

    .action .clickAction {
      display: flex;
      & > span {
        font-size: var(--normalFont);
        display: flex;
        margin: 5px 4px;
        cursor: pointer;

        svg {
          margin-top: 2px;
        }

        span.number {
          font-size: var(--smallFont);
          border-radius: 11px;
          padding: 0px 10px;
          border: 1px solid;
          margin: 0 1vw 0 4px;
        }
      }
    }

    .pic {
      min-width: 50px;
      margin-right: 8px;
      margin-top: 5px;
    }

    textarea {
      margin-top: 5px;
      width: 100%;
      padding: 5px 10px;
      border-radius: 5px;
      border: 1px solid var(--gradient1);
      resize: none;
      height: 60px;
      background: transparent;
      color: var(--black-background);
    }
    button {
      width: 100%;
      color: white;
      background-color: var(--primary-background);
      border: none;
      padding: 5px 0;
      border-radius: 5px;
      cursor: pointer;
      margin-bottom: 5px;
    }
  }
`;

export default Wrapper;
