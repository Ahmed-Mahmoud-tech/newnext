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
    text-align: center;
  }

  .buttonCont {
    display: flex;
    margin: 10px auto 0;
    width: 140px;
    justify-content: space-between;

    button {
      font-weight: bold;
      font-size: var(--normalFont);
      padding: 5px 10px;
      border-radius: 5px;
      border: 1px solid var(--gray-background);

      &.sure {
        background: var(--primary-background);
        color: white;
      }
    }
  }
`;

export default Wrapper;
