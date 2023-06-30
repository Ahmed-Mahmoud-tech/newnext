import styled from "styled-components";
const Wrapper = styled.div`
  background: var(--white-background);
  padding: 20px;
  border-radius: 10px;

  .title {
    color: var(--black-font);
    font-size: var(--largeFont);
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  video {
    width: 100%;
  }
`;
export default Wrapper;
