import * as contentful from "contentful";
import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Youtube from "../components/Youtube/Youtube";
import { IYoutube } from "../components/Youtube/Youtube.types";

export interface Props {
  youtube: IYoutube;
}

export default function AboutPage({ youtube }: Props): JSX.Element {
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
        title={youtube?.title}
        description={youtube?.description}
        videoUrl={youtube.videoUrl}
      />

      <Header title="HobbiesHobbiesHobbiesHobbies" pageTitle="Hobbies" />
    </>
  );
}

export async function getStaticProps() {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const youtube = await client.getEntry("1JUUaaj9pvoL1ECguycNsX");
  return {
    props: {
      youtube: youtube.fields,
    },
  };
}
