import styled from "styled-components";
const Wrapper = styled.div`
  .itemContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 5px 0 10px;

    .item {
      background-color: var(--gradient_1);
      padding-left: 10px;
      border-radius: 10px;
      margin: 2px;
      position: relative;
      max-width: 100%;
      justify-content: space-between;
      display: flex;
      .value {
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: calc(100% - 35px);
        display: block;
        overflow: hidden;
        font-size: var(--smallFont);
        line-height: 20px;
      }

      span.close {
        background: red;
        margin-left: 5px;
        padding: 0 10px;
        color: white;
        border-radius: 0 10px 10px 0;
        svg {
          font-size: 16px;
          position: relative;
          top: 2px;
          font-weight: bold;
          strokewidth: 0.7px;
        }
      }
    }
  }

  .withButton {
    display: flex;
    border: 1px solid;
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
      border-left: 1px solid var(--black-color);
    }
  }
`;
export default Wrapper;
