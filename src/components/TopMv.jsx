/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { mq } from '../style/breakpoints';
import { color } from 'src/style/color';
import Image from 'next/image';
import imgMvSrc from '../img/mv.jpg';

export default function TopMv() {
  return (
    <section className="grid grid-cols-12 w-full">
      <div className="col-start-1 col-end-13 row-start-1 row-end-2">
        <h2 className="font-syne font-bold" css={mvSiteName}>
          Camino<span>.work</span>
        </h2>
      </div>
      <div className="col-start-1 md:col-start-7 col-end-13 row-start-1 row-end-2">
        <div css={mvImage}>
          <Image
            src={imgMvSrc}
            className="rounded-lg"
            alt=""
            width="570"
            height="400"
          />
        </div>
      </div>
    </section>
  );
}

const mvSiteName = css`
  position: relative;
  z-index: 1;
  font-size: clamp(4rem, 2.5rem + 7.2vw, 8rem);
  line-height: 1;
  overflow-wrap: break-word;
  border-radius: 12px;
  margin-top: clamp(3.5rem, 2.5rem + 5vw, 7rem);
  margin-bottom: 1rem;

  span {
    display: block;
  }
  /* ${mq[1]} {
    font-size: 5rem;
  }
  ${mq[2]} {
    font-size: 8rem;
    margin-bottom: 2rem;
  }
  ${mq[5]} {
    font-size: 12rem;
  } */
`;

const mvImage = css`
  margin-top: clamp(2rem, 1.429rem + 2.86vw, 4rem);
`;
