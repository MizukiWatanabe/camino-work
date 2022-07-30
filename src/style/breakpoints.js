const breakpoints = [576, 768, 992, 1200];

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

// TODO: breakpointsをobjectにしてわかりやすくする

// e.g)
//
// import { mq } from '../src/style/breakpoints';
// const Wrapper = css`
//   border: 1px solid red;
//   ${mq[3]} {
//     color: red;
//   }
// `;
