import Head from "next/head";
import { GetStaticProps } from "next";
import Header from "../components/Header/Header";
import PortfolioCollection from "../components/Portfolio/PortfolioCollection";
import { client } from "../utils/utils";
import ClientLogos from "../components/ClientLogos/ClientLogos";
import { Clientlogo, Portfolio } from "../components/Portfolio/Portfolio.types";

interface Props {
  portfolios: Portfolio;
  clientLogos: Clientlogo;
}

export default function PortfolioPage({
  portfolios,
  clientLogos,
}: Props): React.ReactNode {
  return (
    <>
      <Head>
        <title>Kapeesh.dev | Portfolio</title>
        <meta name="description" content="What I've learnt" />
      </Head>

      <Header
        title="PortfolioPortfolioPortfolioPortfolioPortfolioPortfolio"
        pageTitle="Portfolio"
        subtitle="Learning by Doing"
      />

      <PortfolioCollection portfolioCollection={portfolios} />

      <Header title="ClientsClientsClientsClients" subtitle="Clients" />

      <ClientLogos clientLogos={clientLogos} />
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const portfolios = await client
    .getEntries({ content_type: "portfolio" })
    .then((response) => response.items);

  const clientLogos = await client
    .getEntries({ content_type: "clientLogo" })
    .then((response) => response.items);

  return {
    props: {
      portfolios,
      clientLogos,
    },
    revalidate: 3600,
  };
};
