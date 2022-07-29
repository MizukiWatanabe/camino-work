/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import { client } from '../libs/client';
import { css } from '@emotion/react';
import { mq } from '../style/breakpoints';

const Wrapper = css`
  border: 1px solid red;
  ${mq[3]} {
    color: red;
  }
`;

export default function Home({ blog }) {
  return (
    <div>
      <ul css={Wrapper}>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blogs' });
  //console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};
