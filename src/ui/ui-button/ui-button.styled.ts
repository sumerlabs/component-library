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
