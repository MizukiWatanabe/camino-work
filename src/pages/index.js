/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import { client } from '../libs/client';
import { css } from '@emotion/react';
import { mq } from '../style/breakpoints';
import dayjs from 'dayjs';

export default function Home({ blog }) {
  // publishedAtで日付が新しい順に並び替え
  const items = blog.sort((a, b) => {
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
      <main>
        <div className="container" css={Wrapper}>
          <section className="mb-8">
            <h2 className="font-lato" css={mvSiteName}>
              Camino.work
            </h2>
            <p className="mb-4">
              ミチ(またはわみ)のブログ。
              <br />
              趣味で洋楽を聴いたり猫をもんだりしながら、拙いですが洋楽の和訳記事などを書きます。
              <br />
              過去にこのブログにあった技術記事についてははてなブログへ移動予定です。
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
          </section>
          {/* TODO: 記事部分切り分け */}
          <section>
            <h2 className="text-xl md:text-2xl mb-2 border-b border-sky-800">
              記事
            </h2>
            <ul>
              {items.map((blog) => (
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
        </div>
      </main>
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

const Wrapper = css`
  border: 1px solid #006699;
  padding: 16px;
`;

const mvSiteName = css`
  color: #006699;
  text-align: center;
  font-size: 3rem;
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
