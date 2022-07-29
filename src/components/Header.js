/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { mq } from '../style/breakpoints';

const Wrapper = css`
  border: 1px solid red;
  ${mq[3]} {
    color: red;
  }
`;

export default function Header() {
  return <div>header</div>;
}
