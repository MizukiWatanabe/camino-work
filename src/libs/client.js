import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

export async function getPostBySlug(slug) {
  try {
    // postに取得データを入れる
    const post = await client.get({
      endpoint: 'blogs',
      // microCMSのフィルターでslugが一致する記事を取得
      queries: { filters: `slug[equals]${slug}` },
    });
    // console.log(post.contents);
    // post.contentsの配列で返ってくるため[0]で取り出す
    return post.contents[0];
  } catch (error) {
    console.log('~~ getPostBySlug ~~');
    console.log(err);
  }
}
