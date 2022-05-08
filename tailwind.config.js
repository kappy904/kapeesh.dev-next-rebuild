module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#5a1f9f',
        orange: '#f96316',
        blue: '#00b4f2',
      },
      fontFamily: {
        display: ['Merriweather Sans', 'sans-serif'],
        body: ['Petrona', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
