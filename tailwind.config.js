module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        purple: "#0C091F",
        green: "#2A5576",
        blue: "#461D61",
      },
      fontFamily: {
        display: ["Playfair Display", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
