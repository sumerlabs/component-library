import styled from 'styled-components';

export const SelectLoginMethodContainer = styled.div`
padding-top: 2.5rem;
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
    padding-bottom: 1rem;
    .welcome {
      display: flex;
      justify-content: space-around;
      .title {
        display: flex;
        padding: 12px 0px;
         width: 343px;
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
      .message{
        font-size: 18px;
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
  .login-sumer-text{
    font-weight: 400;
    font-size: 18px;
    line-height: 135%;
    padding: 12px 0px;
    width: 343px;
    font-weight: 700;
  }
  button {
    padding: 12px 16px;
    width: 343px;
    height: 44px;
    background: #FFFFFF;
    border: 1px solid #DDE0F5;
    border-radius: 10px;
    display: flex;
    cursor: pointer;
    img {
      width: 16px;
      height: 16px;
    }
    label {
      flex-basis: 85%;
      cursor: pointer;
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
  .facebook-btn{
    background: #1877F2;
    color: white;
  }
`;