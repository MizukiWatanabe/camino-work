import { client } from '../../libs/client';

export default function BlogId({ blogs }) {
  const date = blogs.publishedAt;
  const formatDate = new Date(date);
  const test =
    String(formatDate.getFullYear()) +
    String(formatDate.getMonth() - 1) +
    String(formatDate.getDate());
  // console.log(formatDate);
  return (
    <main>
      <h2>{blogs.title}</h2>
      <p>{blogs.publishedAt}</p>
      <div>{test}</div>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blogs.content}`,
        }}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs' });
  console.log(data);
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
