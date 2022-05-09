import React from "react";
import styles from "./Header.module.css";
import { Props } from "./Header.types";

export default function Header({
  title,
  pageTitle,
  subtitle,
}: Props): JSX.Element {
  return (
    <div
      className={`${styles.animatedHeader} relative overflow-hidden mb-6 md:mb-10`}
    >
      <h1 className="font-primary pointer-events-none select-none font-bold">
        {title}
      </h1>
      <div className="absolute bottom-0">
        <h3 className="font-primary font-bold font-primary pl-3 md:pl-12 pointer-events-none select-none text-base mb-1 md:mb-0 md:text-2xl">
          {pageTitle}
        </h3>
        <h4 className="font-secondary pl-3 text-3xl md:pl-12 left-auto pointer-events-none select-none leading-8 md:leading-none md:tracking-widest sm:text-4xl md:text-6xl font-extrabold relative">
          {subtitle}
        </h4>
      </div>
    </div>
  );
}
