import '../../styles/globals.css';
import Header from '../components/header';
import NextHeadSeo from 'next-head-seo';

function MyApp({ Component, pageProps }) {
  return (
    <>
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
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
