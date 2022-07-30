import { client } from '../../libs/client';
import { MyPageSeo } from '../../components/pageSeo';

export default function BlogId({ blogs }) {
  const date = blogs.publishedAt;

  return (
    <>
      <MyPageSeo path={'/' + blogs.id} title={blogs.title} noindex={false} />
      <main>
        <div className="container">
          <h2>{blogs.title}</h2>
          <p>{blogs.publishedAt}</p>
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
