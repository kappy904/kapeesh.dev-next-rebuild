import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Contact from "../components/Contact/Contact";

export default function ContactPage(): React.ReactNode {
  return (
    <>
      <Head>
        <title>Kapeesh.dev | Contact Me</title>
        <meta name="description" content="Let's get in contact!" />
      </Head>

      <Header
        title="ContactContactContactContactContactContact"
        pageTitle="Contact me"
        subtitle="Learning through connecting"
      />

      <Contact />
    </>
  );
}
