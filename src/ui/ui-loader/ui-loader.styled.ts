import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 50%;
  position: relative;
  border-width: .2em;
  border-style: solid;
  border-bottom-color: transparent;
  animation: 1s loader linear infinite;

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;