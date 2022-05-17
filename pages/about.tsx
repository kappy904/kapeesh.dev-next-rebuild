import Head from "next/head";
import Header from "../components/Header/Header";
import Youtube from "../components/Youtube/Youtube";
import HobbiesCollection from "../components/Hobbies/HobbiesCollection";
import useContentful from "../hooks/useContentful";
import HobbySingle from "../components/Hobbies/HobbySingle";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import { query } from "../graphql/about.query";

export default function AboutPage(): JSX.Element {
  const { data, errors } = useContentful(query);

  if (errors) {
    return <ErrorMessage error={errors} />;
  }

  if (!data) {
    return null;
  }

  const { youtube, hobby, hobbies } = data;

  return (
    <>
      <Head>
        <title>Kapeesh.dev | About</title>
        <meta name="description" content="Get to know me better!" />
      </Head>
      <Header
        title="AboutAboutAboutAbout"
        pageTitle="About Me"
        subtitle="Learning by living"
      />
      <Youtube
        title={youtube?.title}
        description={youtube?.description}
        videoUrl={youtube?.videoUrl}
      />

      <HobbySingle hobbies={hobby} />

      <Header title="HobbiesHobbiesHobbiesHobbies" pageTitle="Hobbies" />

      <HobbiesCollection hobbiesCollection={hobbies.items} />
    </>
  );
}
