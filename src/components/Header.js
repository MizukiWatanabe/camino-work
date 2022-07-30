/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { mq } from '../style/breakpoints';
import Link from 'next/link';

const Wrapper = css`
  border: 1px solid red;
  ${mq[3]} {
    color: red;
  }
`;

export default function Header() {
  return (
    <header className="py-4">
      <nav className="container">
        <Link href="/">
          <a className="inline-block">
            <h1 className="text-sky-900 text-2xl font-lato">Camino.work</h1>
          </a>
        </Link>
        {/* <ul className="">
            <li>
              <Link href="/">
                <a className="text-sky-900 text-2xl font-medium">Camino.work</a>
              </Link>
            </li>
          </ul> */}
      </nav>
    </header>
  );
}
