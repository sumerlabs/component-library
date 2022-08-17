import styled from 'styled-components';

export const RegisterInAppContainer = styled.div`
	display: flex;
    flex-direction: column;
    max-width: 800px;
    align-items: center;
    gap: 30px;
  img {
    width: 180px;
    height: 180px;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
  }
  .exclamation {
    font-weight: 700;
    font-size: 18px;
    line-height: 135%;
    color: #000000;
  }
`;
