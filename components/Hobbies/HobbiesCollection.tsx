import Image from "next/image";
import Fade from "react-reveal/Fade";
import { Hobby } from "./Hobbies.types";

export interface Props {
  hobbiesCollection: Hobby;
}

export default function HobbiesCollection({
  hobbiesCollection,
}: Props): JSX.Element {
  return (
    <div>
      {hobbiesCollection?.map((hobby) => (
        <div
          key={hobby?.title}
          className="flex container mx-auto md:flex-row flex-col justify-center items-center"
        >
          <Fade>
            <div className="px-3 pt-5  md:w-3/5">
              <h2 className="font-secondary tracking-tighter text-2xl leading-5 md:text-3xl text-lg mb-4 font-extrabold text-blue leading-8">
                {hobby?.title}
              </h2>
              <p className="font-light font-primary text-base leading-6 tracking-wider mb-6 md:pr-5">
                {hobby?.blurb?.json?.content?.[0].content?.[0].value}
              </p>
              <a
                className="font-extrabold font-primary mb-2 text-blue"
                href={hobby?.link?.json?.content[0].content?.[1].data.uri}
              >
                {hobby?.link?.json?.content[0].content[1].content?.[0].value}
              </a>
            </div>
            <div className="relative flex flex-row justify-center gap-3 items-center">
              <picture>
                <Image
                  className="block relative object-cover drop-shadow-xl"
                  src={hobby.imagesCollection?.items?.[2]?.url}
                  alt={hobby?.title}
                  height={210}
                  width={210}
                />
              </picture>
              <picture>
                <img
                  className="block relative object-cover drop-shadow-xl"
                  alt={hobby?.title}
                  src={hobby.imagesCollection?.items?.[1]?.url}
                  height={210}
                  width={210}
                />
              </picture>
              <picture>
                <img
                  className="block relative object-cover drop-shadow-xl"
                  alt={hobby?.title}
                  src={hobby.imagesCollection?.items?.[0]?.url}
                  height={210}
                  width={210}
                />
              </picture>
            </div>
          </Fade>
        </div>
      ))}
    </div>
  );
}
