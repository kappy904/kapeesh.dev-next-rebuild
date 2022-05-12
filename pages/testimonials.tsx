import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import Testimonials from "../components/Testimonials/Testimonials";
import Header from "../components/Header/Header";
import { Props } from "../components/Testimonials/Testimonials.types";
import { client } from "../utils/utils";

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

      <Header
        title="TestimonialsMentorshipTestimonialsMentorship"
        pageTitle="Testimonials"
        subtitle="Learning Together"
      />
      <Testimonials testimonials={testimonials} />

      <Header title="MenteesMenteesMenteesMenteesMentees" pageTitle="Mentees" />
      <Testimonials testimonials={mentees} />
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const testimonials = await client
    .getEntries({ content_type: "testimonial" })
    .then((response) => response.items);

  const mentees = await client
    .getEntries({ content_type: "mentees" })
    .then((response) => response.items);

  return {
    props: {
      testimonials,
      mentees,
    },
  };
};
