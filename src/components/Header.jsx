/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
// import { mq } from '../style/breakpoints';
import Link from 'next/link';
import Container from './Container';

// const Wrapper = css`
//   border: 1px solid red;
//   ${mq[3]} {
//     color: red;
//   }
// `;

export default function Header() {
  return (
    <header className="py-4">
      <Container>
        <nav>
          <p className="font-syne font-bold header-title">
            <Link href="/">
              <a className="inline-block ">Camino.work</a>
            </Link>
          </p>

          {/* <ul className="">
            <li>
              <Link href="/">
                <a className="text-sky-900 text-2xl font-medium">Camino.work</a>
              </Link>
            </li>
          </ul> */}
        </nav>
      </Container>
    </header>
  );
}
