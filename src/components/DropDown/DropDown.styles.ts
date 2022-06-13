import styled from "styled-components";

export const DropDownContainer = styled.div`
  margin: 0 auto;
  position: relative;
`;

export const DropDownHeader = styled.div`
  display: flex;
  height: 64px;
  position: absolute;
  width: 100%;
  align-items: center;

  .icon {
    position: absolute;
    right: 0;
    margin-left: 100px;
  }

  .label {
    color: #000;
    display: block;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    padding-right: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 95%;
    padding-bottom: 0.5rem;

    img {
      margin-right: 5px;
      width: 18px;
    }
  }
`;

export const DropDownListContainer = styled.div`
  background: #ffffff;
  border: 1px solid #d2d2d2;
  box-sizing: border-box;
  border-radius: 5px;
  max-height: 310px;
  overflow-y: auto;
  position: absolute;
  top: 30px;
  width: max-content;
  z-index: 100;
  &:focus,
  &:active {
    border: 1px solid #4c42f6;
  }
`;

export const DropDownList = styled.ul`
  margin: 0;
  padding: 0;
  &:first-child {
    padding-top: 9px;
  }
`;

export const ListItem = styled.li`
  cursor: pointer;
  border: 1px solid transparent;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  list-style: none;
  margin-bottom: 4px;
  padding: 4px 12px;
  min-width: 100px;

  &:hover,
  &:focus,
  &:active,
  &.selected {
    border: 1px solid #4c42f6;
    border-radius: 5px;
    font-weight: 600;
  }

  img {
    margin-right: 5px;
    width: 24px;
  }
`;
