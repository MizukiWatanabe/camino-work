/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import { client } from '../libs/client';
import { css } from '@emotion/react';
// import { mq } from '../style/breakpoints';
import dayjs from 'dayjs';
import { color } from 'src/style/color';
import Hero from '@/components/Hero';
import Container from '@/components/Container';

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
  // console.log(items);
  return (
    <>
      <Container border>
        <Hero />
        {/* TODO: 記事部分切り分け */}
        <section>
          <h2 className="text-xl md:text-2xl mb-2 border-b border-sky-800">
            記事
          </h2>
          <ul>
            {ArticleItems.map((blog) => (
              <li key={blog.id} className="">
                <Link href={`/blog/${blog.id}`}>
                  <a>
                    <time dateTime={blog.publishedAt} className="mr-2">
                      {/* day.jsを使用して日付をフォーマット */}
                      {dayjs(blog.publishedAt).format('YYYY/MM/DD')}
                    </time>
                    {blog.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blogs' });
  //console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};
