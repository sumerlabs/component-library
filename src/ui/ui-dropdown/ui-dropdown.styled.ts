import styled from "styled-components";

export const Wrapper = styled.div`
  row-gap: 4px;
  display: flex;
  position: relative;
  flex-direction: column;
  &.error {
    .label, .hint-text {
      color: #F93C00;
    }
    .dropdown {
      color: #F93C00;
      border: 1px solid #F93C00;
      .text {
        &.placeholder {
          color: #F93C00;
        } 
      }
    }
  }
  &.close {
    .dropdown-expanded-section {
      transform: scaleY(0);
    }
  }
  &.open {
    .dropdown {
      border: 1px solid #4C42F6;
    }
    .dropdown-expanded-section {
      transform: scaleY(1);
    }
  }
  .label {
    top: 0px;
    left: 12px;
    padding: 0 4px;
    color: #646464;
    font-size: 12px;
    font-weight: 400;
    line-height: 130%;
    position: absolute;
    background-color: #FFFFFF;
    transform: translateY(-50%);
  }
  .dropdown {
    height: 56px;
    display: flex;
    padding: 0 16px;
    cursor: pointer;
    position: relative;
    border-radius: 8px;
    align-items: center;
    box-sizing: border-box;
    background-color: #FFFFFF;
    border: 1px solid #DDE0F5;
    justify-content: space-between;
    .text {
      display: flex;
      color: #0C1220;
      font-size: 16px;
      font-weight: 400;
      line-height: 140%;
      align-items: center;
      &.placeholder {
        color: #878788;
      }
    }
  }
  .dropdown-expanded-section {
    top: 56px;
    width: 100%;
    z-index: 10;
    padding: 4px;
    display: flex;
    overflow-y: auto;
    max-height: 230px;
    border-radius: 5px;
    position: absolute;
    background: #FFFFFF;
    transform-origin: top;
    flex-direction: column;
    box-sizing: border-box;
    border: 1px solid #DDE0F5;
    transition: transform .3s;
    box-shadow: 0px 6px 8px rgba(69, 68, 74, 0.12);
    &.dropdown-top {
      top: auto;
      bottom: 56px;
      transform-origin: bottom;
    }
    .item {
      height: 46px;
      display: flex;
      flex: 0 0 auto;
      color: #646464;
      padding: 0 12px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 400;
      line-height: 140%;
      border-radius: 8px;
      align-items: center;
      box-sizing: border-box;
      border: 1px solid transparent;
      background-color: #FFFFFF;
      transition: background-color .3s;
      &:hover {
        border: 1px solid #4C42F6;
      }
      &.active {
        color: #4C42F6;
        background: #EDECFE;
      }
      .flag {
        width: 30px;
        margin: 0 4px 0 0;
      }
    }
  }
  .hint-text {
    color: #646464;
    font-size: 12px;
    font-weight: 400;
    line-height: 130%;
  }
`;
