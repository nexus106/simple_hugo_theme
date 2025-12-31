/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './themes/simple-theme/layouts/**/*.html',
    './themes/simple-theme/assets/**/*.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@digital-go-jp/tailwind-theme-plugin'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
  ],
};
