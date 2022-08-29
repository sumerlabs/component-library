import styled from "styled-components";
import { DotsStyle } from '~/components/Slider/Slider.type';


export const ScrollElement = styled.div<{dragMode?: boolean}>`
  position: relative;

  @supports(display: flex) {
    .items {
      position: relative;
      width: 100%;
      overflow-x: ${({dragMode}) => dragMode ? 'scroll' : 'hidden'};
      transition: all 0.2s;
      user-select: none;
      cursor: pointer;
      
      display: flex;

      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow-y: scroll;
      &::-webkit-scrollbar {
          display: none;
      }
    }

    .arrowBtn{
        border-radius: 100%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #000;
        opacity: .5;
        color: white;
        
        &.back{
          left: 0;
          position: absolute;
          top: 45%;
        }
        &.next{
          right: 0;
          position: absolute;
          top: 45%;
        }
    }
  }

`;

export const Dots = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`

export const Dot = styled.div<DotsStyle>`
  width: ${({width}) => width ? width : '10px'};
  height: ${({height}) => height ? height : '10px'};
  border-radius: ${({type}) => type && type === 'square' ? '4px' : '100%'};
  border: ${({type, backgroundColor}) => type && type === 'square' ? `4px solid ${backgroundColor || 'black'}` : `1px solid ${backgroundColor || 'black'}`};
  cursor: pointer;
  &.active{
    background-color: ${({backgroundColor}) => backgroundColor || 'black'};
  }
`