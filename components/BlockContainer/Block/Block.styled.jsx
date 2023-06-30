import styled from "styled-components";
const Wrapper = styled.div`
  width: 250px;
  margin: 15px 10px;
  @media (min-width: 1300px) {
    width: 310px;
  }
  &:hover {
    filter: drop-shadow(2px 4px 6px var(--gray-background));
  }

  .avatar {
    position: relative;
    height: 36px;
    min-width: 36px;
    overflow: hidden;
    border-radius: 50%;
  }
  .blockLink {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .videoImage {
    position: relative;
    width: 250px;
    height: 140px;
    overflow: hidden;
    border-radius: 10px;

    .listNumber {
      position: absolute;
      right: 0;
      width: 33%;
      height: 100%;
      z-index: 5;
      background: var(--gradient1);
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      color: var(--white-color);
      font-size: var(--largeFont);
      font-weight: bold;
      text-align: center;
      svg {
        font-size: var(--hugeFont);
      }

      .infoWrapper.delete {
        background: var(--white-color);
        position: relative;
        top: 1vw;
        color: var(--primary-background);
        display: flex;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 1px var(--gradient0);
        cursor: pointer;
        svg {
          width: 30px;
        }
      }
    }

    @media (min-width: 1300px) {
      width: 310px;
      height: 175px;
    }
    .placeHolder {
      .blockLink {
        z-index: -1;
      }
      transition: 0.2s;
      width: 100%;
      position: absolute;
      z-index: 5;
      padding: 8px;
      background: var(--placeholder-background);
      height: 100%;
      left: -250px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media (min-width: 1300px) {
        padding: 14px;
        left: -310px;
      }

      .infoWrapper {
        display: flex;
        justify-content: space-between;
        margin: 1px auto;
        padding: 2px 17px;
        align-items: center;
        border-radius: 5px;
        font-size: var(--normalFont);
        width: 73%;
        cursor: pointer;
        font-weight: 600;
        background: linear-gradient(45deg, var(--gradient1), var(--gradient2));
        color: var(--white-color);
        box-shadow: 0 0 4px 3px var(--gradient_2);
        &.delete {
          background: var(--primary-background);
        }
        @media (min-width: 1300px) {
          font-size: var(--normalFont);
          margin: 1px auto;
        }
        &:hover {
          color: var(--white-color);
          background: var(--black-background);
          box-shadow: 0 0 4px 3px grey;
          &.delete {
            background: var(--primary-background);
          }
        }

        span.play {
          background: var(--primary-background);
          font-size: var(--normalFont);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px;
          border-radius: 5px;
          color: white;
          width: 50px;
          margin-left: 7px;
        }
      }

      svg {
        font-size: var(--normalFont);
        @media (min-width: 1300px) {
          font-size: var(--largeFont);
        }
      }
      .last.infoWrapper {
        background: unset !important;
        box-shadow: unset !important;
        padding: 0 !important;
        justify-content: space-between !important;
      }
      .later.infoWrapper {
        width: 100% !important;
        @media (min-width: 1300px) {
          margin: 0px 0 !important;
        }
      }
    }

    &:hover {
      .placeHolder {
        left: 0;
      }
    }
  }

  .details {
    min-width: 200px;
    margin-top: 10px;
    display: flex;
  }

  .info {
    margin-left: 10px;
  }

  .videoTitle {
    margin: 0;
    font-size: var(--normalFont);
    font-weight: 600;
  }

  .channel,
  .date {
    font-size: var(--normalFont);
    display: block;
  }

  .attractive {
    & > * {
      margin-right: 10px;
    }
    font-size: var(--normalFont);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    max-width: 200px;
    color: var(--primary-background);
    font-weight: bold;
    svg {
      margin-right: 5px;
      margin-bottom: -4px;
      font-size: var(--largeFont);
    }
  }
`;
export default Wrapper;
