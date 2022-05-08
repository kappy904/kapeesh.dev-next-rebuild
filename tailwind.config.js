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
        display: ['Merriweather Sans', 'sans-serif'],
        body: ['Petrona', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
