/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        'bl': '#141519',
        'gr': '#181A1F',
        'lgr': '#26282E',
        'wg': '#4B5159'
      },
      fontFamily: {
        space: ['"Space Mono"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
