import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import theme from '@app/styles/theme';
import Layout from '@app/components/Layout';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
);

export default App;
