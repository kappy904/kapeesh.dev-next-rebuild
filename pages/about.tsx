import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Youtube from "../components/Youtube/Youtube";
import HobbiesCollection from "../components/Hobbies/HobbiesCollection";
import { query } from "../components/Hobbies/Hobbies.types";
import useContentful from "../hooks/useContentful";
import HobbySingle from "../components/Hobbies/HobbySingle";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

export default function AboutPage(): JSX.Element {
  const { data, errors } = useContentful(query);
  if (errors) {
    return <ErrorMessage error={errors} />;
  }

  if (!data) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Kapeesh.dev | About</title>
      </Head>
      <Header
        title="AboutAboutAboutAbout"
        pageTitle="About Me"
        subtitle="Learning by living"
      />

      <Youtube
        title={data?.youtube?.title}
        description={data?.youtube?.description}
        videoUrl={data?.youtube?.videoUrl}
      />

      <HobbySingle hobbies={data?.hobbies} />

      <Header title="HobbiesHobbiesHobbiesHobbies" pageTitle="Hobbies" />

      <HobbiesCollection hobbiesCollection={data?.hobbiesCollection} />
    </>
  );
}
