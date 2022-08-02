import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
  }
  
  html {
    height: 100%;
    color: #000000;
    font-size: 16px;
    box-sizing: border-box;
  }

  body {
    height: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: 0;
    cursor: pointer;
    font-style: inherit;
    text-decoration: none;
  }

  .main-content {
    min-height: calc(100% - 282px - 80px);
  }
`;

export default GlobalStyle;
