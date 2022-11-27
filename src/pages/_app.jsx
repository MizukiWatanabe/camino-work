import '../../styles/globals.css';
import NextHeadSeo from 'next-head-seo';
import Layout from '@/components/layouts';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <meta content="ページタイトル" />
      <NextHeadSeo
        title={'Camino.work'}
        description={'Camino.workは洋楽の和訳メインのブログです'}
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
