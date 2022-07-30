import { client } from '../../libs/client';
import { MyPageSeo } from '../../components/pageSeo';
import dayjs from 'dayjs';

export default function BlogId({ blogs }) {
  const publishedAt = dayjs(blogs.publishedAt).format('YYYY/MM/DD');

  return (
    <>
      <MyPageSeo path={'/' + blogs.id} title={blogs.title} noindex={false} />
      <main>
        <div className="container">
          <h2>{blogs.title}</h2>
          <time dateTime={blogs.publishedAt}>{publishedAt}</time>
          <p className="category">
            {blogs.category && `${blogs.category.name}`}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: `${blogs.content}`,
            }}
          />
        </div>
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
