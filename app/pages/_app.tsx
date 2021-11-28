import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@app/styles/global';
import { lightTheme, darkTheme } from '@app/styles/theme';
import { usePreferredMode } from '@app/hooks';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { mode } = usePreferredMode();

  const theme = {
    mode,
    ...(mode === 'light') ? lightTheme : darkTheme
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
