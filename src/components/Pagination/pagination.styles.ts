import styled from 'styled-components';


interface PaginationItemProps {
  readonly selected?: boolean;
  readonly disabled?: boolean;
}

export const PaginationContainer = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  list-style-type: none;
  span {
    &.disabled {
      pointer-events: none;
    }
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    justify-content: center;
    gap: 4rem;
  }
`;

export const PaginationItem = styled.li<PaginationItemProps>`
  padding: 0 5px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  border-radius: 16px;
  color: ${({ theme }) => theme?.colors?.grayScale?.gr2};
  letter-spacing: -0.002em;
  font-size: 16px;
  line-height: 24px;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }

  .arrow {
    &::before {
      position: relative;
      content: '';
      display: inline-block;
      width: 0.4em;
      height: 0.4em;
      border-right: 0.12em solid rgba(0, 0, 0, 0.87);
      border-top: 0.12em solid rgba(0, 0, 0, 0.87);
    }

    &.left {
      transform: rotate(-135deg) translate(-50%);
    }

    &.right {
      transform: rotate(45deg);
    }
  }

  ${({ disabled }) => disabled && `
    pointer-events: none;

    .arrow::before {
      border-right: 0.12em solid rgba(0, 0, 0, 0.43);
      border-top: 0.12em solid rgba(0, 0, 0, 0.43);
    }

    &:hover {
      background-color: transparent;
      cursor: default;
    }
  `}

  ${({ theme, selected }) => selected && `
    color: ${theme?.colors?.blueScale?.b9 ? theme?.colors?.blueScale?.b9 : 'red'};
  `}
`;

export const PaginationDots = styled.div`
  &.dots:hover {
    background-color: transparent;
    cursor: default;
  }
`;
