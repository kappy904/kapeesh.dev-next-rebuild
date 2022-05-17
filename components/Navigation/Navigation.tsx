import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./Navigation.module.css";

export default function Navigation(): JSX.Element {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <Link href="/home">
        <div
          className={`${styles.logo} fixed font-secondary flex items-center pt-6 pl-4 cursor-pointer z-10 outline-none`}
        >
          <i className="bg-orange text-4xl overflow-hidden w-1/4 h-10 text-white font-extrabold rounded-full inline-block">
            K
          </i>
          <span className="text-orange text-2xl tracking-tight">apeesh</span>
        </div>
      </Link>
      <nav
        className={classNames(
          `${styles.nav}`,
          "block absolute rounded-full cursor-pointer",
          {
            [styles.active]: isActive,
          }
        )}
        onClick={() => setIsActive(!isActive)}
        onKeyDown={() => {
          setIsActive(!isActive);
        }}
      >
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </nav>
      <div
        className={classNames(
          `${styles.hiddenWrapper}`,
          "flex justify-around items-center flex overflow-hidden fixed",
          {
            [styles.fullScreen]: isActive,
            [styles.block]: isActive,
            hidden: !isActive,
          }
        )}
      >
        <div
          className={`${styles.navItems} flex flex-col justify-center md:justify-start font-secondary`}
        >
          <h5
            className={`${styles} font-secondary font-bold text-center mt-20 hidden md:block`}
          >
            Front End Developer
          </h5>
          <h2 className="font-secondary font-bold text-6xl text-center mb-24 leading-10 hidden md:block">
            <strong>Kapeesh</strong>
          </h2>
          <Link href="/home">
            <a
              role="button"
              tabIndex={0}
              className="text-3xl text-center mb-4"
              onClick={() => setIsActive(!isActive)}
              onKeyDown={() => {
                setIsActive(!isActive);
              }}
            >
              Home
            </a>
          </Link>
          <Link href="/cv">
            <a
              role="button"
              tabIndex={-1}
              className="text-3xl text-center mb-4"
              onClick={() => setIsActive(!isActive)}
              onKeyDown={() => {
                setIsActive(!isActive);
              }}
            >
              Download CV
            </a>
          </Link>
          <Link href="/portfolio">
            <a
              role="button"
              tabIndex={-2}
              className="text-3xl text-center mb-4"
              onClick={() => setIsActive(!isActive)}
              onKeyDown={() => {
                setIsActive(!isActive);
              }}
            >
              Portfolio
            </a>
          </Link>
          <Link href="/testimonials">
            <a
              role="button"
              tabIndex={-3}
              className="text-3xl text-center mb-4"
              onClick={() => setIsActive(!isActive)}
              onKeyDown={() => {
                setIsActive(!isActive);
              }}
            >
              Testimonials
            </a>
          </Link>
          <Link href="/about">
            <a
              role="button"
              tabIndex={-4}
              className="text-3xl text-center mb-4"
              onClick={() => setIsActive(!isActive)}
              onKeyDown={() => {
                setIsActive(!isActive);
              }}
            >
              About
            </a>
          </Link>
          <Link href="/contact">
            <a
              role="button"
              tabIndex={-5}
              className="text-3xl text-center mb-4"
              onClick={() => setIsActive(!isActive)}
              onKeyDown={() => {
                setIsActive(!isActive);
              }}
            >
              Contact
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
