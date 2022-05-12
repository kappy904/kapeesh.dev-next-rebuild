import React from "react";
import styles from "./Hobbies.module.css";
import { PropsSingle } from "./Hobbies.types";

export default function HobbySingle({ hobbies }: PropsSingle) {
  return (
    <div className="flex container mx-auto flex-col-reverse md:flex-row  justify-center items-center -mt-10">
      <div className={`${styles.contentWrapper} px-3 pt-5`}>
        <h2 className="font-secondary tracking-tighter text-2xl leading-5 md:text-3xl text-lg mb-4 font-extrabold text-blue leading-8">
          {hobbies?.title}
        </h2>
        <p className="font-light font-primary text-base leading-6 tracking-wider mb-6">
          {hobbies?.blurb?.json?.content?.[0].content?.[0].value}
        </p>
        <a
          className="font-extrabold font-primary mb-2 text-blue"
          href={hobbies?.link?.json?.content[0].content?.[1].data.uri}
        >
          {hobbies?.link?.json?.content[0].content[1].content?.[0].value}
        </a>
      </div>
      <div
        className={`${styles.aboutCirclesB} flex-auto md:mx-8 relative about-circles-b max-w-3xl`}
      >
        <picture>
          <source
            type="image/avif"
            srcSet={hobbies?.imagesCollection?.items?.[2].url}
          />
          <img
            className="bg-purple block rounded-full relative object-cover"
            alt={hobbies?.title}
            src={hobbies?.imagesCollection?.items?.[2].url}
          />
        </picture>
        <picture>
          <source
            type="image/avif"
            srcSet={hobbies?.imagesCollection?.items?.url}
          />
          <img
            className="bg-purple block rounded-full relative object-cover object-left-bottom"
            alt={hobbies?.title}
            src={hobbies?.imagesCollection?.items?.[1].url}
          />
        </picture>
        <picture>
          <source
            type="image/avif"
            srcSet={hobbies?.imagesCollection?.items?.[0].url}
          />
          <img
            className="bg-purple block rounded-full relative object-cover"
            alt={hobbies?.title}
            src={hobbies?.imagesCollection?.items?.[0].url}
          />
        </picture>
      </div>
    </div>
  );
}
