import styled from "styled-components";

export const DropDownContainer = styled.div`
  margin: 0 auto;
  position: relative;
`;

export const DropDownHeader = styled.div`
  display: flex;
  position: absolute;
  width: 75%;
  align-items: flex-end;
  border: 1px solid #DDE0F5;
  border-radius: 8px;
  padding: 0.5rem;
  text-align: center;
  align-items: center;

  .icon {
    position: absolute;
    right: 0;
    padding-right: 10px;
    width: 13px;
    height: 13px;
  }

  .label {
    color: ${({ theme }) => theme.colors.black};
    display: block;
    font-size:16px;
    line-height:140%;
    font-weight: 400;
    padding-right: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 95%;
    padding-top: 4px;

    img {
      margin-right: 5px;
      width: 18px;
    }
  }
  &:focus,
  &:active,
  &.selected {
    border: 1px solid ${({ theme }) => theme.colors.primaryColorScale.p2};
  }
  
`;

export const DropDownListContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gr5};
  box-sizing: border-box;
  border-radius: 5px;
  max-height: 310px;
  overflow-y: auto;
  position: absolute;
  top: 43px;
  left: 0;
  width: 100%;
  z-index: 100;
  &:focus,
  &:active {
    border: 1px solid ${({ theme }) => theme.colors.primaryColorScale.p2};
  }
`;

export const DropDownList = styled.ul`
  margin: 0;
  padding: 0;
  padding: 2px;
  &:first-child {
    padding-top: 5px;
  }
`;

export const ListItem = styled.li`
  cursor: pointer;
  border: 1px solid transparent;
  font-size:14px;
  line-height:140%;
  font-weight: 400;
  list-style: none;
  margin-bottom: 4px;
  width: 100%;
  padding: 8px 0px;

  &:hover,
  &:focus,
  &:active,
  &.selected {
    border-radius: 5px;
    font-weight: 600;
    background: #EDECFE;
  }

  img {
    margin-right: 5px;
    width: 20px;
  }
`;
