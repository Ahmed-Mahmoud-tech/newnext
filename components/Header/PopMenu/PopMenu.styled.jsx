import styled from "styled-components";
const Wrapper = styled.div`
  padding: 10px 20px;
  position: absolute;
  top: 112%;
  right: ${(props) => (props.right ? props.right + "px" : "unset")};
  background: var(--white-background);
  width: max-content;
  color: var(--black-color);
  border-radius: 10px;
  box-shadow: 0 0 11px 4px var(--gradient0);
  z-index: 100;

  ul {
    padding: 0;
    list-style: none;
    li {
      padding: 0 10px;
      &:hover {
        background: var(--primary-background);
        color: white;
        border-radius: 5px;
      }
    }
    li a .icon {
      margin-right: 15px;
      margin-top: 5px;
      font-size: var(--largeFont);
    }
    li a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
`;
export default Wrapper;
