import styled from "styled-components";

export const Wrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex: 0 0 auto;
  cursor: pointer;
  border-radius: 4px;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  border: 2px solid #646464;
  transition: border-color .3s;
  &.active {
    border: 2px solid #4C42F6;
    .fill {
      opacity: 1;
    }
  }
  .fill {
    opacity: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity .3s;
    background-color: #4C42F6;
    .icon {
      color: #FFFFFF;
    }
  }
`;
