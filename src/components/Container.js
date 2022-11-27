import { css } from '@emotion/react';
import { color } from 'src/style/color';

export default function Container({ children, border }) {
  return (
    <div
      className="w-full md:w-11/12 lg:w-8/12 mx-auto p-3 lg:p-6 xl:max-w-screen-xl"
      css={border ? stylesBorder : null}
    >
      {children}
    </div>
  );
}

const stylesBorder = css`
  border: 2px solid ${color.mainBlue};
`;
