import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  width: auto;
  height: 10px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gr10};
  border-radius: 10px;
`;


export const InProgress = styled.div<{width: number}>`
  height: 100%;
  background: ${({ theme }) => theme.colors.primaryColorScale.p2};
  border-radius: 7px;
  width: ${props => props.width}%;
`;