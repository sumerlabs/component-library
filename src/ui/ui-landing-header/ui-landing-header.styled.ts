import styled from "styled-components";
import { Breakpoints } from "~/constants";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  position: relative;
  align-items: center;
  border-bottom: 2px solid #E4E9F2;
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
    width: 128px;
    cursor: pointer;
    .img {
      width: 100%;
    }
  }
  .spacer {
    height: 46px;
    display: none;
    margin: 0 23px;
    border: 1px solid #EDECFE;
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
  .about, .community, .expert {
    display: none;
    column-gap: 8px;
    cursor: pointer;
    margin: 0 0 0 36px;
    align-items: center;
    .text {
      color: #0C1220;
      font-size: 18px;
      font-weight: 400;
      line-height: 135%;
    }
  }
  .right-side {
    display: flex;
    align-items: center;
    margin: 0 16px 0 0;
    .login {
      display: none;
      font-size: 18px;
      cursor: pointer;
      font-weight: 400;
      line-height: 22px;
      margin: 0 26px 0 0;
    }
    .download-button {
      height: 40px;
      display: flex;
      color: #FFFFFF;
      cursor: pointer;
      padding: 0 20px;
      column-gap: 8px;
      border-radius: 5px;
      align-items: center;
      background: #4B44F2;
      justify-content: center;
      .text {
        display: none;
        font-size: 18px;
        font-weight: 700;
        line-height: 135%;
      }
    }
  }
  .mobile-menu {
    width: 100%;
    z-index: 10;
    display: flex;
    row-gap: 20px;
    padding: 30px 0;
    max-width: 500px;
    position: absolute;
    top: calc(100% + 2px);
    flex-direction: column;
    transition: transform .3s;
    background-color: #FAFAFA;
    height: calc(100vh - 80px);
    transform: translateX(-100%);
    box-shadow: 0px 6px 8px rgba(69, 68, 74, 0.12);
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
          color: #646464;
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
            color: #4C42F6;
            font-size: 24px;
            font-weight: bold;
            transition: transform .3s;
          }
        }
      }
      .sub-items {
        width: 100%;
        display: flex;
        row-gap: 12px;
        max-height: 0px;
        overflow: hidden;
        padding: 0 0 0 46px;
        flex-direction: column;
        transform-origin: top left;
        transition: transform .3s, max-height .3s;
        .sub-item {
          color: #0C1220;
          cursor: pointer;
          font-size: 12px;
          font-weight: 400;
          line-height: 130%;
          text-decoration: none;
        }
      }
    }
  }
  @media screen and (min-width: ${Breakpoints.LaptopShort}) {
    border: 1px solid #D2D2D2;
    .menu-icon {
      display: none;
    }
    .logo {
      margin: 0 0 0 122px;
    }
    .points {
      display: flex;
    }
    .spacer {
      display: block;
    }
    .about, .community, .expert {
      display: flex;
    }
    .right-side {
      margin: 0 120px 0 auto;
      .login {
        display: block;
      }
      .download-button {
        .text {
          display: block;
        }
      }
    }
  }
`;
