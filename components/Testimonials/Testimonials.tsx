import React from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import { Props } from "./Testimonials.types";

export default function Testimonials({ testimonials }: Props): JSX.Element {
  const contentfulLoader = ({ src }) => {
    return `https:${src}`;
  };

  return (
    <div className="container mx-auto px-4 py-4 md:py-10">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial?.sys.id}
          className="flex mb-10 md:mb-20 items-center flex-col md:flex-row"
        >
          <Fade>
            <picture className="md:mx-8 drop-shadow-xl md:self-start flex-shrink-0 relative block w-2/5 md:w-1/4 relative mb-3 md:w-1/6 pointer-events-none select-none">
              {testimonial.fields.image?.fields.file.url.length > 0 && (
                <Image
                  loader={contentfulLoader}
                  src={`${testimonial?.fields.image?.fields.file.url}`}
                  alt={testimonial?.fields.image?.fields.title}
                  width={200}
                  height={200}
                  priority
                />
              )}
            </picture>
            <div>
              <h2 className="font-secondary tracking-tighter leading-5 md:text-2xl text-2xl mb-1 font-extrabold text-blue">
                {testimonial?.fields.name}
              </h2>
              <h3 className="font-bold font-primary mb-3">
                {testimonial?.fields.title}
              </h3>
              <div className="font-light font-primary text-base leading-6 tracking-wider">
                <ReactMarkdown>{testimonial?.fields.blurb}</ReactMarkdown>
              </div>
              <div className="flex flex-row mt-6 font-bold font-primary pr-8 custom-button-nested">
                <ReactMarkdown>{testimonial?.fields.link}</ReactMarkdown>
              </div>
            </div>
          </Fade>
        </div>
      ))}
    </div>
  );
}
