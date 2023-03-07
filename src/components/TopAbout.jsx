/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { color } from 'src/style/color';
import TopSectionTitle from './TopSectionTitle';

export default function TopAbout() {
  return (
    <section className="mt-12 mb-10">
      <TopSectionTitle sectionTitle="このブログについて" />
      <p className="">
        洋楽の和訳記事多めの音楽中心ブログ。 管理者は路(ミチ)。
      </p>
      <p>
        ご連絡は
        <a
          href="https://twitter.com/nishirohatoo"
          className=""
          rel="noreferrer"
        >
          Twitter(@nishirohatoo)
        </a>
        へDMまたはメンションをつけてご連絡ください。
      </p>
      <p>
        TOPページの画像は
        <a href="https://unsplash.com/photos/x3wDxZJx9qs">Unsplash</a>より。
      </p>
    </section>
  );
}
