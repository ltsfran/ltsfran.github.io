import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps (ctx: DocumentContext): Promise<any> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render (): JSX.Element {
    const favicon: string = `${process.env.PUBLIC_PATH}/favicon.ico`;
    const favicon16: string = `${process.env.PUBLIC_PATH}/favicon-16x16.png`;
    const favicon32: string = `${process.env.PUBLIC_PATH}/favicon-32x32.png`;

    return (
      <Html lang="es">
        <Head>
          <link rel="shortcut icon" href={favicon} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
          <link rel="canonical" href="https://ltsfran.github.io"></link>
          <meta name="description" content="Portfolio to show my experience as a developer and post some topics about web development. Building animations and interactive experiences, website maintenance security."></meta>
          <meta property="og:site_name" content="DigitalCode"></meta>
          <meta property="og:description" content="Portfolio to show my experience as a developer and post some topics about web development. Building animations and interactive experiences, website maintenance security."></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:url" content="https://ltsfran.github.io"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
