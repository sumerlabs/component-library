import styled from 'styled-components';

export const LoginContainerWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column; 
  height: 93%;
  justify-content: space-between;
  .help-link {
    align-self: center;
  }
`;
