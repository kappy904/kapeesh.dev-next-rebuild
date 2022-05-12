import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Cv from "../components/Cv/Cv";

export default function CvPage(): React.ReactNode {
  return (
    <>
      <Head>
        <title>Kapeesh.dev | CV</title>
        <meta name="description" content="Download my CV" />
      </Head>

      <Header
        title="CurriculumVitaeCurriculumVitaeCurriculumVitaeCurriculumVitae"
        pageTitle="CV Download"
        subtitle="Learn about my skills"
      />

      <Cv />
    </>
  );
}
