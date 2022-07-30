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
    <header className="">
      <nav>
        <div className="container">
          <ul className="header">
            <li>
              <Link href="/">
                <a className="text-sky-900 text-2xl font-medium">Camino.work</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
