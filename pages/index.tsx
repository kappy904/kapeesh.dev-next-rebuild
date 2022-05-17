import Head from "next/head";
import Hello from "../components/hello/Hello";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello Sourcegraph!</title>
        <meta name="description" content="Hello Sourcegraph" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hello />
    </>
  );
}
