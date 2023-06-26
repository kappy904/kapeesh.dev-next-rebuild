import Fade from "react-reveal/Fade";
import { PropsSingle } from "./Hobbies.types";

export default function HobbySingle({ hobbies }: PropsSingle): JSX.Element {
  const {
    blurb: {
      json: { content: paragraph },
    },
  } = hobbies;

  const {
    imagesCollection: { items: images },
  } = hobbies;

  return (
    <div className="flex container mx-auto md:flex-row flex-col justify-center items-center">
      <Fade>
        <div className="px-3 pt-5 md:w-3/5">
          <h2 className="font-secondary tracking-tighter text-2xl leading-5 md:text-3xl text-lg mb-4 font-extrabold text-blue leading-8">
            {hobbies?.title}
          </h2>
          <p className="font-light font-primary text-base leading-6 tracking-wider mb-6 md:pr-5">
            {paragraph?.[0].content?.[0].value}
          </p>
        </div>
        <div className="relative flex flex-row justify-center gap-3 items-center">
          {images?.map((image) => (
            <picture key={image?.sys?.id}>
              <source type="image/avif" srcSet={image?.url} />
              <img
                className="block relative object-cover drop-shadow-xl"
                src={image?.url}
                alt={image?.fileName}
                width={200}
                height={200}
              />
            </picture>
          ))}
        </div>
      </Fade>
    </div>
  );
}
