import styled from 'styled-components';

export const Wrapper = styled.label`
  row-gap: 4px;
  display: flex;
  flex-direction: column;
  &.error {
    .input-box {
      .input {
        border: 1px solid #F93C00;
        &::placeholder {
          color: #F93C00;
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
  .input-box {
    height: 56px;
    display: flex;
    border-radius: 5px;
    position: relative;
    background: #FFFFFF;
    box-sizing: border-box;
    border: 1px solid #DDE0F5;
    transition: border-color .3s;
    &:focus-within {
      .input {
        border: 1px solid #4C42F6;
      }
      .label {
        top: 0px;
        left: 12px;
        padding: 0 4px;
        font-size: 12px;
        line-height: 130%;
      }
    }
    .label {
      top: 50%;
      left: 16px;
      color: #878788;
      font-size: 16px;
      font-weight: 400;
      line-height: 140%;
      position: absolute;
      background-color: #FFFFFF;
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
      &:not(:placeholder-shown) ~ .label {
        top: 0px;
        left: 12px;
        padding: 0 4px;
        font-size: 12px;
        line-height: 130%;
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