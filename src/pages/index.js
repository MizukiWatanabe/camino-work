/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import { client } from '../libs/client';
import { css } from '@emotion/react';
import { mq } from '../style/breakpoints';
import dayjs from 'dayjs';

const Wrapper = css`
  border: 1px solid #006699;
  padding: 8px;
  ${mq[3]} {
    // color: ;
  }
`;

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
    <div className="container" css={Wrapper}>
      <ul>
        {items.map((blog) => (
          <li key={blog.id} className="border-b-1 border-indigo-500">
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
