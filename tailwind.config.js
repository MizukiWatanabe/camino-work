/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        notoSansJP: ['Noto Sans JP', 'sans-serif'],
        pacifico: ['Pacifico', 'sans-serif'],
        mPlusRounded: ['M PLUS Rounded 1c', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
