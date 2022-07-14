import styled from "styled-components";

export const ErrorMessageWrapper = styled.div`
  color: ${({ theme }) => theme.colors.redScale.r2};
  font-size:14px;
  line-height:140%;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const IconWrapper = styled.span`
  margin-right: 5px;
`;