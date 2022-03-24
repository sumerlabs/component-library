import styled from "styled-components";


export const ScrollElement = styled.div`
  position: relative;

  @supports(display: flex) {
    .items {
      position: relative;
      width: 100%;
      overflow-x: scroll;
      overflow-y: hidden;
      transition: all 0.2s;
      user-select: none;
      cursor: pointer;
      
      display: flex;
      gap: 30px;

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