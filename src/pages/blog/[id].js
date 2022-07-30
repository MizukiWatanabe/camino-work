/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { mq } from '../../style/breakpoints';
import { client } from '../../libs/client';
import { MyPageSeo } from '../../components/pageSeo';
import dayjs from 'dayjs';

export default function BlogId({ blogs }) {
  const publishedAt = dayjs(blogs.publishedAt).format('YYYY/MM/DD');

  return (
    <>
      <MyPageSeo path={'/' + blogs.id} title={blogs.title} noindex={false} />
      <main>
        <article>
          <div className="container" css={container}>
            <div className="mt-5 md:mt-8 mb-4">
              <h2 className="text-xl md:text-2xl text-center">{blogs.title}</h2>
            </div>
            <div className="flex justify-center mb-8 md:mb-12">
              <div css={metaItems}>
                <time
                  dateTime={blogs.publishedAt}
                  className="inline-block mr-4"
                >
                  {publishedAt}
                </time>
                <p className="category inline-block">
                  {blogs.category && `${blogs.category.name}`}
                </p>
              </div>
            </div>
            <div
              css={blogContents}
              dangerouslySetInnerHTML={{
                __html: `${blogs.content}`,
              }}
            />
          </div>
        </article>
      </main>
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

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blogs', contentId: id });

  return {
    props: {
      blogs: data,
    },
  };
};

const container = css`
  border: 1px solid #006699;
  padding: 8px 16px 48px;
  margin-bottom: 32px;
  ${mq[0]} {
    margin-bottom: 40px;
  }
`;

const metaItems = css`
  border-bottom: 1px solid #006699;
  padding-bottom: 0.25rem;
  display: inline-block;
  ${mq[0]} {
  }
`;

const blogContents = css`
  iframe {
    width: 100%;
  }

  a {
    color: #003399;
    text-decoration: underline;
    transition: color 0.3s ease;
    &:hover {
      color: #006699;
    }
  }

  h2 {
    border-left: 3px solid #006699;
    padding-left: 0.5rem;
    margin-bottom: 1.5rem;
    ${mq[0]} {
      font-size: 1.5rem;
    }
  }

  p + h2 {
    margin-top: 1.5rem;
  }

  h3 {
    border-left: 3px solid #006699;
    padding-left: 0.5rem;
    margin-bottom: 1.5rem;
    ${mq[0]} {
      font-size: 1.2rem;
    }
  }
`;
