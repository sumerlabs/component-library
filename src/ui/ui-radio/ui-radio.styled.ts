import styled from "styled-components";

export const Wrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  cursor: pointer;
  border-radius: 50%;
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
    border-radius: 50%;
    width: calc(100% - 4px);
    transition: opacity .3s;
    height: calc(100% - 4px);
    background-color: #4C42F6;
  }
`;
