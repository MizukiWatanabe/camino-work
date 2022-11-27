/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import { client } from '../libs/client';
import { css } from '@emotion/react';
import { mq } from '../style/breakpoints';
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

  return (
    <>
      <Container>
        <h1 className="my-12 font-syne font-bold" css={title}>
          Camino.work
        </h1>
        {/* TODO: 記事部分切り分け */}
        <section className="w-full lg:w-3/4 mx-auto px-4 py-5">
          <h2 className="text-sky-900 text-2xl md:text-5xl mb-2 border-b border-sky-900 font-syne font-bold">
            Article
          </h2>
          <ul css={articleList}>
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

          <div className="mt-12">
            <h2 className="text-sky-900 text-2xl md:text-5xl mb-2 border-b border-sky-900 font-syne font-bold">
              About
            </h2>
            <p className="">
              管理：ミチ(路/またはわみ)。
              <br />
              趣味で洋楽を聴いたり猫をもんだりしながら、拙いですが洋楽の和訳記事などを書きます。
            </p>
            <p>
              ご連絡はTwitter{' '}
              <a
                href="https://twitter.com/nishirohatoo"
                className=""
                target="_blank"
                rel="noreferrer"
              >
                @nishirohatoo
              </a>{' '}
              まで。
              <br />
              DMまたはメンションをつけてご連絡ください。
            </p>
          </div>
        </section>
        <section className="w-3/4 mx-auto px-4 "></section>
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

const title = css`
  color: ${color.mainBlue};
  text-align: center;
  font-size: 3rem;
  font-size: clamp(1.5rem, 5vw + 1.75rem, 10rem);
  ${mq[1]} {
    /* font-size: 4rem; */
  }
  ${mq[2]} {
    /* font-size: 6rem; */
  }
  ${mq[5]} {
    /* font-size: 10rem; */
  }
`;

const articleList = css`
  li + Li {
    margin-top: 0.5rem;
  }
`;
