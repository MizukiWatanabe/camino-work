/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { mq } from '../../style/breakpoints';
import { client } from '../../libs/client';
import { PageSeo } from '@/components/PageSeo';
import dayjs from 'dayjs';
import { color } from 'src/style/color';
import Container from '@/components/Container';

export default function BlogId({ blogs }) {
  const publishedAt = dayjs(blogs.publishedAt).format('YYYY/MM/DD');

  return (
    <>
      <PageSeo path={'/blog/' + blogs.id} title={blogs.title} noindex={false} />

      <article className="mb-12">
        <Container css={container} border>
          <div className="mt-5 md:mt-8 mb-4">
            <h2 className="text-xl md:text-2xl text-center">{blogs.title}</h2>
          </div>
          <div className="flex justify-center mb-8 md:mb-12">
            <div css={metaItems}>
              <time dateTime={blogs.publishedAt} className="inline-block mr-4">
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
        </Container>
      </article>
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
  border: 1px solid ${color.mainBlue};
  padding: 8px 16px 48px;
  margin-bottom: 32px;
  ${mq[0]} {
    margin-bottom: 40px;
  }
`;

const metaItems = css`
  border-bottom: 1px solid ${color.mainBlue};
  padding-bottom: 0.25rem;
  display: inline-block;
  ${mq[0]} {
  }
`;

const blogContents = css`
  iframe {
    max-width: 100%;
  }

  h2 {
    border-left: 3px solid ${color.mainBlue};
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
    border-left: 3px solid ${color.mainBlue};
    padding-left: 0.5rem;
    margin-bottom: 1.5rem;
    ${mq[0]} {
      font-size: 1.2rem;
    }
  }
`;
