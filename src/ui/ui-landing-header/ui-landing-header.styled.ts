import styled from "styled-components";
import { Breakpoints } from "~/constants";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  position: relative;
  align-items: center;
  .menu-icon {
    width: 30px;
    height: 30px;
    display: flex;
    cursor: pointer;
    margin: 0 0 0 16px;
    align-items: center;
    justify-content: center;
    .icon {
      font-size: 24px;
    }
  }
  .logo {
    margin: auto;
    cursor: pointer;
  }
  .points {
    display: none;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    transition: color .3s;
    &:hover {
      color: #4C42F6;
    }
    .icon-four-points {
      font-size: 30px;
    }
  }
  .spacer {
    width: 46px;
  }
  .mobile-menu {
    top: 100%;
    width: 100%;
    z-index: 10;
    display: flex;
    row-gap: 20px;
    max-width: 500px;
    position: absolute;
    flex-direction: column;
    transition: transform .3s;
    background-color: #FFFFFF;
    height: calc(100vh - 80px);
    transform: translateX(-100%);
    &.show {
      transform: translateX(0);
    }
    .item {
      display: flex;
      padding: 0 16px;
      position: relative;
      flex-direction: column;
      &.open {
        .actionable {
          .icon-arrow {
            transform: rotate(180deg);
          }
        }
        .sub-items {
          max-height: 100px;
        }
      }
      .actionable {
        display: flex;
        cursor: pointer;
        column-gap: 16px;
        padding: 0 0 10px 0;
        .icon {
          width: 30px;
          height: 30px;
          color: #4C42F6;
          font-size: 20px;
          font-weight: bold;
        }
        .texts {
          .title {
            font-size: 14px;
            font-weight: 700;
            margin: 0 0 4px 0;
          }
          .description {
            font-size: 12px;
            font-weight: 400;
            color: rgb(135, 135, 136);
          }
        }
        .arrow {
          margin: 0 0 0 auto;
          .icon-arrow {
            font-weight: bold;
            transition: transform .3s;
          }
        }
      }
      .sub-items {
        width: 100%;
        display: flex;
        row-gap: 10px;
        max-height: 0px;
        overflow: hidden;
        padding: 0 0 0 46px;
        flex-direction: column;
        transform-origin: top left;
        transition: transform .3s, max-height .3s;
        .sub-item {
          cursor: pointer;
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
  }
  @media screen and (min-width: ${Breakpoints.Tablet}) {
    .menu-icon {
      display: none;
    }
    .logo {
      margin: 0 30px 0 122px;
    }
    .points {
      display: flex;
    }
    .spacer {
      display: none;
    }
    
  }
`;
