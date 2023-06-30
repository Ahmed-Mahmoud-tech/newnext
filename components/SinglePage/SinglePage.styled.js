import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 20px;
  justify-content: center;
  .right {
    @media (min-width: 1250px) {
      width: 65%;
    }
    width: 60%;
    @media (max-width: 1000px) {
      width: 100%;
    }
  }

  .left {
    flex-grow: 1;
    @media (min-width: 1250px) {
      width: 30%;
    }
    width: 40%;
    @media (max-width: 1000px) {
      width: 100%;
    }
  }

  /********************* */
  .subVideo {
    .videoTitle {
      font-size: var(--largeFont);
      margin: 10px 0 3px;
      font-weight: bold;

      span.views {
        color: var(--primary-background);
        display: inline-block;
        margin-right: 10px;

        svg {
          position: relative;
          top: 3px;
          margin-right: 2px;
        }
      }
    }

    .date {
      font-size: var(--smallFont);
      color: var(--primary-background);
      font-weight: bold;
      margin-bottom: 10px;
      span {
        color: var(--black-color);
      }
    }
  }
  .name {
    font-size: var(--normalFont);
    font-weight: bold;
    margin-bottom: 5px;
  }

  .comment {
    font-size: var(--normalFont);
    line-height: var(--normalFont);
  }

  .action .clickAction {
    display: flex;
    flex-wrap: wrap;
    & > span,
    & > a {
      font-size: var(--largeFont);
      display: flex;
      margin: 5px;
      cursor: pointer;

      svg {
        margin-top: 2px;
      }

      span.number {
        font-size: var(--smallFont);
        line-height: var(--largeFont);
        border-radius: 11px;
        padding: 0px 10px;
        border: 1px solid;
        margin: 0 4px;
      }
    }
  }

  .pic {
    min-width: 50px;
    margin-right: 8px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    img {
      border-radius: 50%;
    }
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

  button.subscribe,
  button.comment {
    color: white;
    background-color: var(--black-background);
    border: none;
    padding: 5px 11px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    /* flex-direction: column; */
    -webkit-box-align: center;
    align-items: center;
    line-height: 20px;
    margin-left: 15px;
    &:hover {
      background-color: var(--black-background);
      color: var(--white-color);
    }

    span {
      margin-right: 5px;
    }
  }

  button.comment .icon {
    font-size: var(--largeFont);
    line-height: 3px;
  }

  button.send {
    width: 100%;
    color: white;
    background-color: var(--primary-background);
    border: none;
    padding: 5px 0;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 5px;
  }

  .description {
    background-color: var(--gradient_1);
    padding: 15px;
    margin: 5px 0 15px;
    border-radius: 10px;
  }
`;
export default Wrapper;
