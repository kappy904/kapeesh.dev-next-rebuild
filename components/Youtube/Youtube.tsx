import React from "react";
import { IYoutube } from "./Youtube.types";

export default function Youtube({
  title,
  description,
  videoUrl,
}: IYoutube): JSX.Element {
  return (
    <div className="flex container mx-auto flex-col md:flex-row justify-center">
      <div className="flex-auto md:mx-8">
        <iframe
          title={title}
          className="px-3"
          width="538"
          height="289"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="px-3 pt-5 content-wrapper">
        <h2 className="font-secondary tracking-tighter text-2xl leading-5 md:text-3xl text-lg mb-4 font-extrabold text-blue leading-8">
          {title}
        </h2>
        <p className="font-light font-primary text-base leading-6 tracking-wider mb-6">
          {description}
        </p>
      </div>
    </div>
  );
}
