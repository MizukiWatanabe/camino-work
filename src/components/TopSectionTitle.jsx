/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { color } from 'src/style/color';

export default function TopSectionTitle({ sectionTitle }) {
  return (
    <h2 className="" css={topSectionTitle}>
      {sectionTitle}
    </h2>
  );
}

const topSectionTitle = css`
  border-bottom: 1px solid ${color.mainText};
`;
