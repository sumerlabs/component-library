import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  border: 2px solid #646464;
  transition: border-color .3s;
  &.active {
    border: 2px solid #4C42F6;
    .icon {
      opacity: 1;
    }
  }
  .icon {
    font-size: 20px;
    opacity: 0;
    display: flex;
    flex: 0 0 auto;
    color: #FFFFFF;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    background-color: #4C42F6;
    transition: opacity .3s;
  }
`;
