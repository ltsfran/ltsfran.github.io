import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  html, body {
    width: 100%;
    font-size: 16px;

    ${({ theme }) => theme && css`
      background-color: ${theme.backgroundColor};
      color: ${theme.colorText};
    `}
  }

  #__next {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
