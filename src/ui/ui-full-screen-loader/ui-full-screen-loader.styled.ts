import styled from "styled-components";

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 0px;
  height: 0px;
  z-index: 1000;
  display: flex;
  color: #4C42F6;
  position: fixed;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  &.show {
    width: 100vw;
    height: 100vh;
  }
`;