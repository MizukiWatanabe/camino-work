/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { mq } from '../../style/breakpoints';
import { client } from '../../libs/client';
import { PageMeta } from '../../components/PageMeta';
import { color } from 'src/style/color';
import Container from '@/components/Container';
import ConvertData from '@/components/ConvertDate';
import Link from 'next/link';

export default function BlogId({ blogs }) {
  return (
    <>
      <PageMeta
        path={'/blog/' + blogs.id}
        title={blogs.title}
        noindex={false}
      />

      <article className="">
        <Container>
          <div className="mt-5 md:mt-8 mb-4">
            <h1 className="" css={articleTitle}>
              {blogs.title}
            </h1>
          </div>
          <div className="flex mb-8 md:mb-12">
            <div css={metaItems} className="mt-4 flex">
              <dl className="font-bold">
                <div className="flex">
                  <dt className="mr-1">公開日</dt>
                  <dd>
                    <ConvertData convertDate={blogs.publishedAt}></ConvertData>
                  </dd>
                </div>
                <div className="flex">
                  <dt className="mr-1">カテゴリ</dt>
                  <dd className="category inline-block">
                    {blogs.category && `${blogs.category.name}`}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="grid grid-cols-12 w-full">
            <div
              className="col-start-1 md:col-start-3 col-end-13 md:col-end-11 row-start-1 row-end-2"
              css={blogContents}
              dangerouslySetInnerHTML={{
                __html: `${blogs.content}`,
              }}
            />
          </div>
        </Container>
      </article>

      <footer
        className="flex flex-col content-center justify-center py-6"
        css={articleFooter}
      >
        <Container>
          <div className="" css={articleFooterInner}>
            <Link href="/">
              <a className="" css={articleFooterTopLink}>
                トップページへ
              </a>
            </Link>
          </div>
        </Container>
      </footer>
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs' });
  // console.log(data);
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述
// getStaticPropsなのでSG
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blogs', contentId: id });

  return {
    props: {
      blogs: data,
    },
  };
};

const metaItems = css`
  ${mq[0]} {
  }
`;

const blogContents = css`
  iframe {
    max-width: 100%;
  }

  p + h2 {
    margin-top: 3rem;
  }

  .twitter-tweet {
    border-left: 2px solid ${color.blue};
    padding-left: 1rem;
    margin: 1rem;
  }
`;

const articleTitle = css`
  margin-top: clamp(3.25rem, 2.287rem + 4.81vw, 6.5rem);
  font-size: clamp(2rem, 1.704rem + 1.48vw, 3rem);
`;
const articleFooter = css`
  margin-top: clamp(3rem, 1.519rem + 7.41vw, 8rem);
`;

const articleFooterInner = css`
  border-top: 1px solid ${color.black};
  display: flex;
  justify-content: center;
  padding-top: clamp(1rem, 0.852rem + 0.74vw, 1.5rem);
  padding-bottom: clamp(1.5rem, 1.352rem + 0.74vw, 2rem);
`;

const articleFooterTopLink = css`
  font-weight: bold;
`;
