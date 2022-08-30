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
  // console.log(items);
  return (
    <>
      <Container>
        {/* <Hero /> */}
        <h1 className="" css={title}>
          Camino.work
        </h1>
        {/* TODO: 記事部分切り分け */}
        <section className="w-full lg:w-3/4 mx-auto border-4 border-sky-700 px-4 py-5">
          <div className="">
            <h2 className="text-sky-800 text-xl md:text-5xl mb-2 border-b border-sky-700 font-pacifico">
              Article
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
          </div>
          <div className="mt-12">
            <h2 className="text-sky-800 text-xl md:text-5xl mb-2 border-b border-sky-700 font-pacifico">
              About
            </h2>
            <p className="">
              管理：ミチ(またはわみ)。
              <br />
              趣味で洋楽を聴いたり猫をもんだりしながら、拙いですが洋楽の和訳記事などを書きます。
              <br />
              過去にこのブログにあった技術記事については、後ほど別のブログへ移動予定です。
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
  font-family: 'Pacifico', cursive;
  ${mq[1]} {
    font-size: 5rem;
  }
  ${mq[2]} {
    font-size: 8rem;
  }
  ${mq[5]} {
    font-size: 12rem;
  }
`;
