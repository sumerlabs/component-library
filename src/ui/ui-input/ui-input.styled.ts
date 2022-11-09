import styled from 'styled-components';

export const Wrapper = styled.label`
  row-gap: 4px;
  display: flex;
  flex-direction: column;

  &.error {
    .input-box {
      &.outline{
        border: none;
        .input {
          border: 1px solid #F93C00;
          &::placeholder {
            color: #F93C00;
          }
        }
      }

      &.filled{
        border: none;
        .input {
          border-bottom: 1px solid #F93C00;
          border-radius: 0;
          &::placeholder {
            color: #F93C00;
          }
        }
      }
      .label {
        color: #F93C00;
      }
    }

    .hint {
      color: #F93C00;
    }
  }

  &.success {
    .input-box {
      &.outline{
        border: none;
        .input {
          border: 1px solid #009B5A;
          &::placeholder {
            color: #009B5A;
          }
        }
      }

      &.filled{
        border: none;
        .input {
          border-bottom: 1px solid #009B5A;
          border-radius: 0;
          &::placeholder {
            color: #009B5A;
          }
        }
      }
      .label {
        color: #009B5A;
      }
    }

    .hint {
      color: #009B5A;
    }
  }

  .input-box {
    height: 56px;
    display: flex;
    position: relative;
    transition: border-color .3s;

    &.filled{
      border-radius: 0;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border: none;
      border-bottom: 1px solid #DDE0F5;
      background: #FAFAFA;

      .input{
        background: transparent;
        padding-top: 13px;
      }
      .label{ 
        background: transparent;
      }

      &:focus-within {
        .input {
          border-bottom: 1px solid #4C42F6;
          border-radius: 0;
          padding-top: 13px;
        }
      }

      .input{
        &:focus ~ .label,
        &.fill ~ .label,
        &.is-placeholder ~ .label {
          top: 15px;
          left: 12px;
          font-size: 12px;
        }
      }
    }

    &.outline{
      border-radius: 5px;
      background: #FFFFFF;
      box-sizing: border-box;
      border: 1px solid #DDE0F5;
      
      &:focus-within {
        .input {
          border: 1px solid #4C42F6;
        }
      }
      .input{
        &:focus ~ .label,
        &.fill ~ .label,
        &.is-placeholder ~ .label {
          top: 0px;
          left: 12px;
          font-size: 12px;
          background-color: #FFFFFF;
        }
      }
    }

    &.view{
      border-radius: 5px;
      background: #FFFFFF;
      box-sizing: border-box;
      border: none;
      
      &:focus-within {
        .input {
          border: none;
        }
      }
      .input{
        background: #FAFAFA;

        &:focus ~ .label,
        &.fill ~ .label,
        &.is-placeholder ~ .label {
          top: 0px;
          left: 12px;
          font-size: 12px;
          background-color: #FFFFFF;
        }
      }
    }

    &.is-prefix{
      .input{
        padding-left: 65px;
      }
      .label{
        left: 12px;
        font-size: 12px;
      }
      .prefix{
        position: absolute;
        left: 16px;
        width: 40px;
        display: flex;
        justify-content: center;
      }
      &.filled{
        .label{
          top: 15px;
        }
        
        .prefix{
          top: 26px;
        }
      }
      &.outline, &.view{
        .label{
          top: 0px;
          background: #ffffff;
        }
        
        .prefix{
          top: 19px;
        }
      }
    }

    .show-password{
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translate(0%,-50%);
      font-size: 20px;
    }

    .label {
      top: 50%;
      left: 16px;
      color: #878788;
      font-size: 16px;
      padding: 0 4px;
      font-weight: 400;
      line-height: 140%;
      position: absolute;
      transform: translateY(-50%);
      transition: top .3s, font-size .3s;
    }
    .input {
      flex: 1;
      width: 100%;
      border: none;
      outline: none;
      padding: 0 16px;
      font-size: 16px;
      font-weight: 400;
      line-height: 140%;
      border-radius: 5px;
      caret-color: #4C42F6;
      box-sizing: border-box;
      -moz-appearance: textfield;
      &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      } 
      &::placeholder {
        opacity: 0.9;
        color: #878788;
        font-size: 16px;
        font-weight: 400;
        line-height: 140%;
      }
    }
  }
  .hint {
    color: #646464;
    font-size: 12px;
    font-weight: 400;
    line-height: 130%;
  }
`;