import styled from 'styled-components';

export const SelectLoginMethodContainer = styled.div`
	display: flex;
    flex-direction: column;
  hr {
    height: 0;
    border: 1px solid #DDE0F5;
    width: 100%;
  }
  .header {
    display: flex;
    flex-direction: column;
    .welcome {
      display: flex;
      justify-content: space-around;
      .title {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 15px;
        img {
          width: 146px;
          height: 33px;
        }
      }
      img {
        width: 163px;
        height: 163px;
      }
    }
  }
  .body {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding: 5px;
  }
  button {
    padding: 12px 16px;
    width: 343px;
    height: 44px;
    background: #FFFFFF;
    border: 1px solid #DDE0F5;
    border-radius: 5px;
    display: flex;
    img {
      width: 16px;
      height: 16px;
    }
    label {
      flex-basis: 85%;
    }
  }
  .box-error-code {
    color: ${({ theme }) => theme.colors.redScale.r2};
    font-size:14px;
    line-height:140%;
    font-weight: 400;
    text-align: center;
    padding-top: 14px;
  }
  .register {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    span {
      cursor: pointer;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      color: #4C42F6;
    }
  }
`;