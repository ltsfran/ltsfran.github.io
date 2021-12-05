import Head from 'next/head';
import { Layout } from '@app/features';

const Home: React.FC = () => (
  <Layout>
    <Head>
      <title>Homepage | Frontend Developer - Luis Tupa</title>
      <meta property="og:title" content="Homepage | Frontend Developer - Luis Tupa"></meta>
    </Head>
    <div>Homepage</div>
  </Layout>
);

export default Home;
