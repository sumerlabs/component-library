import styled from 'styled-components';

export const DownloadAppButtonContainer = styled.button`
  .downloads-icon > img {
    width: 15px;
    height: 18px;
  }
  font-weight: 700;
  font-size: 16px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 8px;
  gap: 10px;
  width: 311px;
  height: 50px;
  background: ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gr5};
  cursor: pointer;
`;
