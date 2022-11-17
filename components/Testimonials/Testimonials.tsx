import React from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import styles from "./Testimonials.module.css";
import { Props } from "./Testimonials.types";

export default function Testimonials({ testimonials }: Props): JSX.Element {
  const contentfulLoader = ({ src }) => {
    return `https:${src}`;
  };

  return (
    <div
      className={`${styles.testimonialsWrapper} container mx-auto px-4 py-4 md:py-10`}
    >
      {testimonials.map((testimonial) => (
        <Fade>
          <div
            key={testimonial?.sys.id}
            className="flex mb-10 md:mb-40 items-center flex-col md:flex-row"
          >
            <picture
              className={`${styles.picture} flex-shrink-0 relative block w-2/5 md:w-1/4 relative my-3 md:mr-20 md:w-1/6 pointer-events-none select-none`}
            >
              {testimonial.fields.image?.fields.file.url.length > 0 && (
                <Image
                  loader={contentfulLoader}
                  src={`${testimonial?.fields.image?.fields.file.url}`}
                  className="rounded-full"
                  alt={testimonial?.fields.image?.fields.title}
                  width={250}
                  height={250}
                  priority
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              )}
            </picture>
            <div>
              <h2 className="font-secondary tracking-tighter leading-5 md:text-3xl text-2xl mb-2 font-extrabold text-purple">
                {testimonial?.fields.name}
              </h2>
              <h3 className="font-bold font-primary mb-6">
                {testimonial?.fields.title}
              </h3>
              <div className="font-light font-primary text-base leading-6 tracking-wider">
                <ReactMarkdown>{testimonial?.fields.blurb}</ReactMarkdown>
              </div>
              <div className="flex flex-row mt-6 font-bold font-primary pr-8">
                <ReactMarkdown>{testimonial?.fields.link}</ReactMarkdown>
              </div>
            </div>
          </div>
        </Fade>
      ))}
    </div>
  );
}
