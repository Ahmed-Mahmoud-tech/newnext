import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  padding: 10px;
  margin: auto;

  .leftSec {
    display: flex;
    align-items: center;
    position: relative;

    .menu {
      font-size: 1.5rem;
      cursor: pointer;
    }
    .logo {
      height: auto;
      margin-left: 10px;
    }
  }

  .searchParent {
    display: flex;
    align-items: center;
  }
  .searchCont {
    width: 50vw;
    max-width: 500px;
    border: 1px solid var(--gradient1);
    border-radius: 20px;
    height: 35px;
    display: flex;
    overflow: hidden;
    input {
      background: transparent;
      color: var(--black-background);
    }
    button.mic {
      border: 0;
      border-left: 1px solid var(--gradient1);
      width: 50px;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--gradient_1);
      color: var(--white-font);
      cursor: pointer;
    }
    .searchForm {
      border: 0;
      padding: 10px;
      width: calc(100% - 50px);
      height: 100%;
      outline: 0px;
      box-shadow: 0 0 2px 1px var(--gradient_1) inset;
      border-radius: 15px 0 0 15px;
    }
  }
  .isMobile {
    .searchCont {
      width: unset;
    }

    input {
      display: none;
    }
  }

  .searchPop.isMobile {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    right: 2.5%;
    z-index: 5;
    width: 100%;
    background: var(--white-background);
    text-align: center;
    display: flex;
    justify-content: center;
    .searchCont {
      width: 80vw;
      margin: auto;
    }
    input {
      display: block;
    }
  }

  .rightSec {
    display: flex;
    align-items: center;

    .create,
    .notification,
    .support {
      font-size: 1.5rem;
      margin: 0.1rem;
      border-radius: 50%;
      height: 2rem;
      width: 2rem;
      justify-content: center;
      display: flex;
      align-items: center;
      &:hover {
        background: var(--gradient_1);
      }
    }

    .login {
      background: var(--primary-background);
      font-weight: bold;
      margin: 5px;
      padding: 5px 10px;
      border-radius: 5px;
      color: var(--white-color);
      &:hover {
        background: var(--black-color);
        cursor: pointer;
      }
    }

    .notification {
      position: relative;
      .count {
        position: absolute;
        background: var(--primary-background);
        padding: 2px;
        border-radius: 50%;
        font-size: 10px;
        color: white;
        font-weight: bold;
        top: 0;
        right: 0;
        text-align: center;
        width: 17px;
      }
    }
    .profile {
      position: relative;
      font-size: 1rem;
      padding: 1rem;
      background: var(--primary-background);
      background-size: cover;
      border-radius: 50%;
      height: 1rem;
      width: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 500;
      margin-left: 0.2rem;
      cursor: pointer;
    }
  }
`;
export default Wrapper;
