import styled from "styled-components";

export const Wrapper = styled.div`
  height: 50px;
  display: flex;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  column-gap: 10px;
  line-height: 135%;
  border-radius: 8px;
  align-items: center;
  border-color: #FFFFFF;
  justify-content: center;
  background-color: #4C42F6;
  &:hover {
    background-color: #362FAF;
  }
  &:active {
    background-color: #4C42F6;
  }
  &.secondary {
    color: #4C42F6;
    background-color: #FFFFFF;
    border: 1px solid #4C42F6;
  }
  &.expert {
    color: #000000;
    background: linear-gradient(90.32deg, #FFB237 -6.02%, #FFB237 9.29%, #E58D09 25.38%, #FFB237 67.24%, #E58D09 112.77%);
  }
  &.disabled {
    color: #878788;
    cursor: default;
    background-color: #F3F3F3;
    &:hover {
      background-color: #F3F3F3;
    }
    &:active {
      background-color: #F3F3F3;
    }
    &.secondary {
      border-color: #F3F3F3;
    }
  }
`;
