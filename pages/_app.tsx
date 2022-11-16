// @typescript-eslint/no-camelcase
import { Petrona, Merriweather_Sans } from "@next/font/google";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

const petrona = Petrona({
  subsets: ["latin"],
  variable: "--font-petrona",
});
const merriweatherSans = Merriweather_Sans({
  subsets: ["latin"],
  variable: "--font-merriweatherSans",
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout
      font={`${petrona.variable} font-sans ${merriweatherSans.variable} font-serif`}
    >
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
