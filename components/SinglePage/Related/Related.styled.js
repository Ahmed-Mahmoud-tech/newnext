import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;

  p.dragNote {
    font-weight: bold;
    padding: 15px;
    color: var(--primary-background);
  }

  .block {
    width: unset;
    display: flex;
    margin-top: 0;
    flex-wrap: wrap;
    .avatar {
      display: none;
    }
  }
  .videoImage {
    width: 200px !important;
    height: 112px !important;
  }

  .videoImage .placeHolder svg {
    font-size: var(--normalFont);
  }

  .videoImage .placeHolder .infoWrapper {
    width: 90% !important;
    padding: 1px 17px !important;
    margin: 0.5px auto !important;
    font-size: var(--smallFont) !important;
  }

  .videoImage .placeHolder .infoWrapper svg {
    font-size: var(--normalFont);
  }
  .videoImage .placeHolder .infoWrapper span.play svg {
    font-size: var(--smallFont);
  }

  .videoImage .placeHolder .infoWrapper span.play {
    padding: 4px !important;
    width: 30px;
  }
`;
export default Wrapper;
