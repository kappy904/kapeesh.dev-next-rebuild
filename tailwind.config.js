const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#5a1f9f',
        green: '#008521',
        blue: '#15009E',
      },
      fontFamily: {
        primary: ['var(--font-merriweatherSans)', ...fontFamily.serif],
        secondary: ['var(--font-petrona)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
