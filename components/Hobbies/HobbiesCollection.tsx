import React from "react";
import styles from "./Hobbies.module.css";
import { Hobby } from "./Hobbies.types";

export interface Props {
  hobbiesCollection: Hobby;
}

export default function HobbiesCollection({
  hobbiesCollection,
}: Props): JSX.Element {
  return (
    <div className={`${styles.hobbiesWrapper}`}>
      {hobbiesCollection?.map((hobby) => (
        <div
          key={hobby?.title}
          className="flex container mx-auto flex-col-reverse md:flex-row  justify-center items-center -mt-10"
        >
          <div className={`${styles.contentWrapper} px-3 pt-5`}>
            <h2 className="font-secondary tracking-tighter text-2xl leading-5 md:text-3xl text-lg mb-4 font-extrabold text-blue leading-8">
              {hobby?.title}
            </h2>
            <p className="font-light font-primary text-base leading-6 tracking-wider mb-6">
              {hobby?.blurb?.json?.content?.[0].content?.[0].value}
            </p>
            <a
              className="font-extrabold font-primary mb-2 text-blue"
              href={hobby?.link?.json?.content[0].content?.[1].data.uri}
            >
              {hobby?.link?.json?.content[0].content[1].content?.[0].value}
            </a>
          </div>
          <div
            className={`${styles.aboutCirclesB} flex-auto md:mx-8 relative about-circles-b max-w-3xl`}
          >
            <picture>
              <source
                type="image/avif"
                srcSet={hobby.imagesCollection?.items?.[2]?.url}
              />
              <img
                className="bg-purple block rounded-full relative object-cover"
                alt={hobby?.title}
                src={hobby.imagesCollection?.items?.[2]?.url}
              />
            </picture>
            <picture>
              <source
                type="image/avif"
                srcSet={hobby.imagesCollection?.items?.[1]?.url}
              />
              <img
                className="bg-purple block rounded-full relative object-cover object-left-bottom"
                alt={hobby?.title}
                src={hobby.imagesCollection?.items?.[1]?.url}
              />
            </picture>
            <picture>
              <source
                type="image/avif"
                srcSet={hobby.imagesCollection?.items?.[0]?.url}
              />
              <img
                className="bg-purple block rounded-full relative object-cover"
                alt={hobby?.title}
                src={hobby.imagesCollection?.items?.[0]?.url}
              />
            </picture>
          </div>
        </div>
      ))}
    </div>
  );
}
