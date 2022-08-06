/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { mq } from '../style/breakpoints';
import { color } from 'src/style/color';
import Container from '@/components/Container';

export default function Custom404() {
  return (
    <Container>
      <section css={Wrapper}>
        <h2 className="font-lato" css={pageTitle}>
          404
        </h2>
        <p className="mb-4 text-center">ページがありません。</p>
      </section>
    </Container>
  );
}

const Wrapper = css`
  border: 1px solid ${color.mainBlue};
  padding: 16px;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const pageTitle = css`
  color: ${color.mainBlue};
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
