import Fade from "react-reveal/Fade";
import styles from "./Hobbies.module.css";
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
    <div className="flex container mx-auto flex-col-reverse md:flex-row  justify-center items-center -mt-10">
      <div className={`${styles.contentWrapper} px-3 pt-5`}>
        <h2 className="font-secondary tracking-tighter text-2xl leading-5 md:text-3xl text-lg mb-4 font-extrabold text-blue leading-8">
          {hobbies?.title}
        </h2>
        <p className="font-light font-primary text-base leading-6 tracking-wider mb-6">
          {paragraph?.[0].content?.[0].value}
        </p>
      </div>
      <div
        className={`${styles.aboutCirclesB} flex-auto md:mx-8 relative about-circles-b max-w-3xl`}
      >
        <Fade bottom>
          {images?.map((image) => (
            <picture key={image?.sys?.id}>
              <source type="image/avif" srcSet={image?.url} />
              <img
                className="bg-purple block rounded-full relative object-cover"
                src={image?.url}
                alt={image?.fileName}
              />
            </picture>
          ))}
        </Fade>
      </div>
    </div>
  );
}
