/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { mq } from '../style/breakpoints';
import { color } from 'src/style/color';

export default function Hero() {
  return (
    <section className="mb-8">
      <h2 className="font-syne font-bold" css={mvSiteName}>
        Camino.work
      </h2>

      <p className="mb-4">
        ミチ(路、またはわみ)のブログ。
        <br />
        趣味で洋楽を聴いたり猫をもんだりしながら、拙いですが洋楽の和訳記事などを書きます。
      </p>
      <p>
        ご連絡はTwitter{' '}
        <a
          href="https://twitter.com/nishirohatoo"
          className=""
          target="_blank"
          rel="noreferrer"
        >
          @nishirohatoo
        </a>{' '}
        まで。
        <br />
        DMまたはメンションをつけてご連絡ください。
      </p>
    </section>
  );
}

const mvSiteName = css`
  color: #fff;
  text-align: center;
  font-size: 3rem;
  background-color: ${color.mainBlue};
  border-radius: 12px;
  margin-bottom: 1rem;
  display: block;
  padding: 2rem 0;
  ${mq[1]} {
    font-size: 5rem;
  }
  ${mq[2]} {
    font-size: 8rem;
    margin-bottom: 2rem;
  }
  ${mq[5]} {
    font-size: 12rem;
  }
`;
