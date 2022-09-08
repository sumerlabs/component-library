import styled from 'styled-components';

import { StyledButtonProps } from './types';

export const WrapperButton = styled.button<StyledButtonProps>`
	${({
    width,
    height,
    borderRadius,
    background,
    color,
   }): string => `
    height: ${height || '50px'}; 
    width: ${width || '100%'}; 
    border-radius: ${borderRadius || '5px'}; 
    background-color: ${background || '#4C42F6'};
    color: ${color || '#FFFFFF'};
    font-size: 18px;
    border: none;
    cursor: pointer;
    padding: 0 1rem;
    text-decoration: none;
    
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    
    &:hover{ opacity: 0.8; }
  `}

  ${({ appereance}) =>
		appereance === 'rounded' &&
		`
    border-radius:78px;
  `}

  ${({ appereance, color, borderColor }) =>
		appereance === 'outline' &&
		`
    background-color: #ffffff;
    border: 1px solid ${borderColor || '#4C42F6' };
    color: ${color || '#4C42F6' };

    &:hover{ background-color: #ffffff; }
    
    &:disabled {
      opacity: 0.5;
      color: ${color || '#4C42F6' } !important;
      background-color: transparent !important;
    }
  `}

  ${({ appereance, color }) =>
		appereance === 'link' &&
		`
    background-color: transparent;
    border: none;
    color: ${color || '#4C42F6' };

    &:disabled {
      background-color: transparent !important;
    }
  `}

  ${({ appereance }) =>
		appereance === 'expert' &&
		`
    color: #000000;
    background: linear-gradient(90.32deg, #FFB237 -6.02%, #FFB237 9.29%, #E58D09 25.38%, #FFB237 67.24%, #E58D09 112.77%);

    &:disabled {
      opacity: .5;
      color: #000000 !important;
      background-color: transparent !important;
    }
  `}

  ${({ appereance, color }) =>
		appereance === 'beauty' &&
		`
    color: ${color || '#4C42F6'};
    background: #EDECFE;
  `}

  &:disabled {
    color: #878788;
    cursor: default;
    background-color: #F3F3F3;
    &:hover {
      background-color: #F3F3F3;
    }
    &:active {
      background-color: #F3F3F3;
    }
    &.secondary {
      border-color: #F3F3F3;
    }
	}
`;
