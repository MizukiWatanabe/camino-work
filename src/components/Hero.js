/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { mq } from '../style/breakpoints';
import { color } from 'src/style/color';

export default function Hero() {
  return (
    <section className="mb-8">
      <h2 className="font-lato" css={mvSiteName}>
        Camino.work
      </h2>

      <p className="mb-4">
        ミチ(またはわみ)のブログ。
        <br />
        趣味で洋楽を聴いたり猫をもんだりしながら、拙いですが洋楽の和訳記事などを書きます。
        <br />
        過去にこのブログにあった技術記事についてははてなブログへ移動予定です。
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
