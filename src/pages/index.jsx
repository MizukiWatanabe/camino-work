/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import { client } from '../libs/client';
import { css } from '@emotion/react';
import Container from '@/components/Container';
import TopMv from '@/components/TopMv';
import TopAbout from '@/components/TopAbout';
import TopSectionTitle from '@/components/TopSectionTitle';
import ConvertData from '@/components/ConvertDate';

export default function Home({ blog }) {
  // publishedAtで日付が新しい順に並び替え
  const ArticleItems = blog.sort((a, b) => {
    if (a.publishedAt > b.publishedAt) {
      return -1;
    }
    if (a.publishedAt < b.publishedAt) {
      return 1;
    }
  });

  return (
    <>
      <Container>
        <TopMv />

        {/* TODO: 記事部分切り分け */}
        <section className="mt-12">
          <TopSectionTitle sectionTitle="記事" />
          <ul role="list" css={articleList}>
            {ArticleItems.map((blog) => (
              <li key={blog.id} className="">
                <Link href={`/blog/${blog.id}`}>
                  <ConvertData convertDate={blog.publishedAt}></ConvertData>
                  <span
                    className="block md:inline md:ml-2"
                    css={articleListTitle}
                  >
                    {blog.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <TopAbout />
      </Container>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blogs', queries: { limit: 100 } });
  //console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};

const articleList = css`
  li + Li {
    margin-top: 0.5rem;
  }
`;

const articleListTitle = css`
  font-weight: bold;
`;
