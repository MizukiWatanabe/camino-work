import '../../styles/globals.css';
import NextHeadSeo from 'next-head-seo';
import Layout from '@/components/layouts';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextHeadSeo
        title={'Camino.work'}
        description={'洋楽の和訳中心の音楽ブログ'}
        og={{
          image: 'https://camino.work/ogp.png',
          type: 'article',
          siteName: 'Camino.work',
        }}
        twitter={{
          card: 'summary',
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
