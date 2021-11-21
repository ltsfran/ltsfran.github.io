import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  html, body {
    width: 100%;
    font-size: 16px;
  }

  #__next {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
  }
`;

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
