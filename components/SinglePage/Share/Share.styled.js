import styled from "styled-components";
const Wrapper = styled.div`
  background: var(--white-background);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  font-size: var(--hugeFont);
  flex-wrap: wrap;
  width: 500px;
  margin: auto;
  max-width: 80%;
  a {
    padding: 10px;
    border-radius: 50%;
    box-shadow: 1px 1px 5px 1px grey;
    display: flex;
    margin: 5px;

    svg {
      &:hover {
        color: var(--primary-background);
      }
    }
  }
`;
export default Wrapper;
