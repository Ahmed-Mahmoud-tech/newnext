import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: var(--gradient1);
  justify-content: center;
  align-items: center;

  .children {
    width: 500px;
    max-width: 80vw;
    margin: auto;
  }
`;
export default Wrapper;
