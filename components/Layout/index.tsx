import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import Header from '@app/components/Header';

const Layout: React.FC = ({ children }) => {
  const favicon = `${process.env.PUBLIC_PATH}/favicon.ico`;
  const favicon16 = `${process.env.PUBLIC_PATH}/favicon-16x16.png`;
  const favicon32 = `${process.env.PUBLIC_PATH}/favicon-32x32.png`;

  return (
    <Box as="main">
      <Head>
        <link rel="shortcut icon" href={favicon} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://ltsfran.github.io"></link>
        <meta name="description" content="Portfolio to show my experience as a developer and post some topics about web development. Building animations and interactive experiences, website maintenance security." />
        <meta property="og:site_name" content="DigitalCode" />
        <meta property="og:description" content="Portfolio to show my experience as a developer and post some topics about web development. Building animations and interactive experiences, website maintenance security." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ltsfran.github.io" />
      </Head>
      <Header />
      <Container maxW="container.sm">
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
