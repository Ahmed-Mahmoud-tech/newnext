import styled from "styled-components";
const Wrapper = styled.div`
  margin: 0 auto 15px;

  .avatarWrapper,
  .avatarWrapper > div {
    margin: auto;
    max-width: max-content;

    input[type="range"] {
      margin: auto;
      display: flex;
    }
  }
  button {
    font-size: var(--smallFont) !important;
    margin: 5px auto 0 !important;
    display: block;
    padding: 5px !important;
  }

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    input[type="range"] {
      overflow: hidden;
      width: 80px;
      -webkit-appearance: none;
      background-color: var(--black-background);
    }

    input[type="range"]::-webkit-slider-runnable-track {
      height: 10px;
      -webkit-appearance: none;
      color: var(--primary-background);
      margin-top: -1px;
    }

    input[type="range"]::-webkit-slider-thumb {
      width: 10px;
      -webkit-appearance: none;
      height: 10px;
      cursor: ew-resize;
      background: #434343;
      box-shadow: -80px 0 0 80px var(--primary-background);
    }
  }
  /** FF*/
  input[type="range"]::-moz-range-progress {
    background-color: var(--primary-background);
  }
  input[type="range"]::-moz-range-track {
    background-color: var(--black-background);
  }
  /* IE*/
  input[type="range"]::-ms-fill-lower {
    background-color: var(--primary-background);
  }
  input[type="range"]::-ms-fill-upper {
    background-color: var(--black-background);
  }
`;

export default Wrapper;
