import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import Header from "../components/Header/Header";
import PortfolioCollection from "../components/Portfolio/PortfolioCollection";
import { Portfolio } from "../components/Portfolio/Portfolio.types";
import { client } from "../utils/utils";

export default function PortfolioPage({
  portfolios,
}: Portfolio): React.ReactNode {
  return (
    <>
      <Head>
        <title>Kapeesh.dev | Testimonials</title>
        <meta
          name="description"
          content="What my colleagues and mentees have shared"
        />
      </Head>

      <Header
        title="TestimonialsMentorshipTestimonialsMentorship"
        pageTitle="Testimonials"
        subtitle="Learning Together"
      />
      <PortfolioCollection portfolioCollection={portfolios} />

      <Header title="ClientsClientsClientsClients" subtitle="Clients" />
      <div className="relative flex flex-wrap justify-center w-16 h-16 bg-purple rounded-full p-2 relative bg-cover-wrapper mb-4">
        {/*        <div
          className="w-16 h-16 bg-purple rounded-full p-2 relative bg-cover"
          style={{ backgroundImage: `url('/static/images/logos/obikwa.jpg')` }}
        /> */}
      </div>
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const portfolios = await client
    .getEntries({ content_type: "portfolio" })
    .then((response) => response.items);
  return {
    props: {
      portfolios,
    },
  };
};
