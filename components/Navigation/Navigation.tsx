import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import styles from "./Navigation.module.css";

export default function Navigation(): JSX.Element {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  return (
    <>
      <Link href="/">
        <div
          className={`${styles.logo} fixed font-secondary flex items-center pt-6 pl-4 cursor-pointer z-10 outline-none`}
        >
          <i className="bg-purple text-2xl overflow-hidden w-1/4 h-10 text-white font-extrabold rounded-full inline-block">
            K
          </i>
          <span className="text-blue text-2xl tracking-tight">apeesh</span>
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
          <h2 className="font-secondary font-bold text-5xl text-center mb-24 leading-10 hidden md:block">
            <strong>Kapeesh</strong>
          </h2>
          <Link href="/">
            <a
              role="button"
              tabIndex={0}
              className={`${
                router.pathname === "/" ? "nav-active" : ""
              } text-2xl text-center mb-4 font-primary`}
              onClick={() => setIsActive(!isActive)}
              onKeyDown={() => {
                setIsActive(!isActive);
              }}
            >
              Home
            </a>
          </Link>
          <Link href="/portfolio">
            <a
              role="button"
              tabIndex={-2}
              className={`${
                router.pathname === "/portfolio" ? "nav-active" : ""
              } text-2xl text-center mb-4 font-primary`}
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
              className={`${
                router.pathname === "/testimonials" ? "nav-active" : ""
              } text-2xl text-center mb-4 font-primary`}
              onClick={() => setIsActive(!isActive)}
              onKeyDown={() => {
                setIsActive(!isActive);
              }}
            >
              Testimonials
            </a>
          </Link>
          <Link href="/contact">
            <a
              role="button"
              tabIndex={-5}
              className={`${
                router.pathname === "/contact" ? "nav-active" : ""
              } text-2xl text-center mb-4 font-primary`}
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
