import Head from 'next/head';

interface Props {
  title: string;
}

const Content: React.FC<Props> = ({ title, children }) => {
  const titlePage = `${title} | Frontend Developer - Luis Tupa`;

  return (
    <>
      <Head>
        <title>{titlePage}</title>
        <meta property="og:title" content={titlePage} />
      </Head>
      {children}
    </>
  );
};

export default Content;
