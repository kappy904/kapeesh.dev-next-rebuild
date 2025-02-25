import { GetStaticProps } from "next";
import Testimonials from "@/components/Testimonials/Testimonials";
import Header from "@/components/Header/Header";
import Head from "next/head";
import {
  Testimonial,
  Mentee,
} from "@/components/Testimonials/Testimonials.types";
import { client } from "@/utils/utils";

interface Props {
  testimonials: Testimonial;
  mentees: Mentee;
}

const getTestimonials = async (type: string) => {
  const response = await client.getEntries({
    content_type: type,
  });
  return response.items;
};

export default function TestimonialsPage({
  testimonials,
  mentees,
}: Props): React.ReactNode {
  return (
    <>
      <Head>
        <title>Kapeesh.dev | Testimonials</title>
        <meta
          name="description"
          content="What my colleagues and mentees have shared"
        />
      </Head>

      <Header pageTitle="Testimonials" />
      <Testimonials testimonials={testimonials} />

      <Header pageTitle="Mentee Testimonials" />
      <Testimonials testimonials={mentees} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const testimonials = await getTestimonials("testimonial");
  const mentees = await getTestimonials("mentees");

  return {
    props: {
      testimonials,
      mentees,
    },
    revalidate: 3600,
  };
};
