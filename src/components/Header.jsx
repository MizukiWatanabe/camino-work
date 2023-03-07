/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { color } from 'src/style/color';
import Link from 'next/link';

const headerSiteName = css`
  color: ${color.mainText};
  text-decoration: none;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1;
`;

const headerBorder = css`
  border-bottom: 1px solid ${color.mainText};
`;

export default function Header() {
  return (
    <header className="w-full md:w-11/12 xl:w-full mx-auto  xl:max-w-screen-lg px-2">
      <div css={headerBorder} className="py-2 md:py-3">
        <p className="">
          <Link href="/">
            <a
              css={headerSiteName}
              className="inline-block font-syne font-bold"
            >
              Camino.work
            </a>
          </Link>
        </p>
      </div>
    </header>
  );
}
