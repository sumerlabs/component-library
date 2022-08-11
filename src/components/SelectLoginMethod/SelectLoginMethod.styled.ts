import styled from 'styled-components';

export const SelectLoginMethodContainer = styled.div`
	display: flex;
    flex-direction: column;
  hr {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.primaryColorScale.p2};
  }
  .header {
    display: flex;
    flex-direction: column;
    .welcome {
      display: flex;
      title {
        display: flex;
        flex-direction: column;
      }
    }
  }
  .body {
    display: flex;
    flex-direction: column;
    gap: 10px
  }
  button {
    padding: 12px 16px;
    width: 343px;
    height: 44px;
    background: #FFFFFF;
    border: 1px solid #DDE0F5;
    border-radius: 5px;
  }
`;