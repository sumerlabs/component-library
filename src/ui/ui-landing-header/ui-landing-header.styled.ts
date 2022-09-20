import styled from "styled-components";
import { Breakpoints } from "~/constants";

export const Wrapper = styled.div`
  z-index: 99;
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
    position: relative;
    transition: color .3s;
    &:hover {
      .icons {
        color: #4C42F6;
      }
    }
    .icons {
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
    }
    .icon-four-points {
      font-size: 30px;
    }
  }
  .about, .community, .expert-link {
    display: none;
    column-gap: 8px;
    position: relative;
    margin: 0 0 0 36px;
    align-items: center;
    .text {
      color: #0C1220;
      font-size: 18px;
      font-weight: 400;
      line-height: 135%;
      text-decoration: none;
    }
    .clicker {
      display: flex;
      column-gap: 8px;
      cursor: pointer;
      align-items: center;
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
    max-width: 500px;
    position: absolute;
    padding: 30px 0 0 0;
    top: calc(100% + 2px);
    flex-direction: column;
    transition: transform .3s;
    background-color: #FAFAFA;
    height: calc(100vh - 80px);
    transform: translateX(-102%);
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
        text-decoration: none;
        .icon {
          width: 30px;
          height: 30px;
          color: #646464;
          font-size: 20px;
          font-weight: bold;
        }
        .texts {
          .title {
            color: #000000;
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
    .expert-button {
      margin: 0 16px;
    }
    .login-button {
      width: 100%;
      height: 40px;
      display: flex;
      color: #FFFFFF;
      font-size: 14px;
      cursor: pointer;
      font-weight: 700;
      line-height: 140%;
      margin: auto 0 0 0;
      align-items: center;
      justify-content: center;
      background-color: #4C42F6;
    }
  }
  .submenu {
    left: 0;
    top: 62px;
    row-gap: 20px;
    padding: 40px;
    display: flex;
    width: max-content;
    border-radius: 5px;
    position: absolute;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #FFFFFF;
    border: 1px solid #E4E9F2;
    transition: clip-path .3s;
    box-shadow: 0px 10px 10px -5px rgba(17, 17, 17, 0.18);
    &.open {
      clip-path: inset(0% -2% -4% -2%);
    }
    &.close {
      clip-path: inset(0% 0% 102% 0%);
    }
    .actionable {
      display: flex;
      cursor: pointer;
      column-gap: 16px;
      text-decoration: none;
      .icon {
        width: 30px;
        height: 30px;
        color: #4C42F6;
        font-size: 20px;
        font-weight: bold;
      }
      .texts {
        .title {
          color: #000000;
          font-size: 14px;
          font-weight: 700;
          line-height: 140%;
          margin: 0 0 4px 0;
        }
        .description {
          color: #666666;
          font-size: 12px;
          font-weight: 400;
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
  }
  @media screen and (min-width: ${Breakpoints.LaptopShort}) {
    background-color: #FFFFFF;
    border: 1px solid #D2D2D2;
    .menu-icon {
      display: none;
    }
    .logo {
      margin: 0 0 0 60px;
    }
    .points {
      display: flex;
    }
    .spacer {
      display: block;
    }
    .about, .community, .expert-link {
      display: flex;
    }
    .right-side {
      margin: 0 60px 0 auto;
      .login {
        display: block;
      }
      .download-button {
        .text {
          display: block;
          width: 150px;
        }
      }
    }
  }
  @media screen and (min-width: ${Breakpoints.LaptopMedium}) {
    .logo {
      margin: 0 0 0 120px;
    }
    .right-side {
      margin: 0 120px 0 auto;
    }
  }
`;

export const DownloadContent = styled.div`
  text-align: center;
  .sumer-img {
    width: 132px;
    height: 138.6px;
  }
  .text-acount {
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
  }
  .text-download {
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    padding: 1rem 0;
  }
  .download-app-button {
    display: flex;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 8px;
    padding: 14px 8px;
    width: 70%;
    margin: 0 auto;
    margin-bottom: 1rem;
    cursor: pointer;
  }
`;

