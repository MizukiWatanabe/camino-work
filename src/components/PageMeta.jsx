import NextHeadSeo from 'next-head-seo';

export const PageMeta = (props) => {
  const {
    path,
    title = 'Camino.work',
    description = 'Camino.workは洋楽の和訳メインのブログです',
    ogImagePath = 'https://camino.work/ogp.png',
    noindex,
    noTitleTemplate,
  } = props;

  // Set APP_ROOT_URL on enviroment variables
  // e.g. APP_ROOT_URL=https://example.com
  // https://nextjs.org/docs/basic-features/environment-variables
  const APP_ROOT_URL = process.env.NEXT_PUBLIC_APP_ROOT_URL;

  // Absolute page url
  const pageUrl = APP_ROOT_URL + path;
  // Absolute og image url
  const ogImageUrl = APP_ROOT_URL + ogImagePath;

  return (
    <NextHeadSeo
      title={noTitleTemplate ? title : `${title} - Camino.work`}
      canonical={pageUrl}
      description={description}
      robots={noindex ? 'noindex, nofollow' : undefined}
      og={{
        title,
        description,
        url: pageUrl,
        image: ogImageUrl,
        type: 'article',
        siteName: 'Camino.work',
      }}
      twitter={{
        card: 'summary_large_image',
      }}
    />
  );
};
