/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { mq } from '../style/breakpoints';
import { color } from 'src/style/color';
import Container from '@/components/Container';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Container>
      <section css={Wrapper}>
        <h2 className="font-syne font-bold" css={pageTitle}>
          404
        </h2>
        <p className="mb-4 text-center">ページがありません。</p>
        <p>
          <Link href="/" className="">
            トップページへ
          </Link>
        </p>
      </section>
    </Container>
  );
}

const Wrapper = css`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const pageTitle = css`
  color: ${color.mainBlue};
  text-align: center;
  font-size: clamp(3rem, 0.333rem + 13.33vw, 12rem);
`;
