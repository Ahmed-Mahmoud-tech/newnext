import styled from "styled-components";
const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--gradient1);
  top: 0;
  left: 0;

  .info {
    background-color: var(--white-background);
    color: var(--primary-background);
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;
  }
`;
export default Wrapper;
