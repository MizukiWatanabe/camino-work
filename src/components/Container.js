import { css } from '@emotion/react';
import { color } from 'src/style/color';

export default function Container({ children, border }) {
  return (
    <div
      className="w-11/12 2xl:w-full mx-auto p-2 lg:p-4  xl:max-w-screen-xl"
      css={border ? stylesBorder : null}
    >
      {children}
    </div>
  );
}

const stylesBorder = css`
  border: 1px solid ${color.mainBlue};
`;
