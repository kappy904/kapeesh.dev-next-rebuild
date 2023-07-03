import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="flex flex-row justify-center font-secondary py-2 md:hidden">
      <Link href="/">
        <a
          role="button"
          tabIndex={0}
          className={`${
            router.pathname === "/" ? "nav-active" : ""
          } text-base text-center font-primary px-2`}
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
          } text-base text-center font-primary px-2`}
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
          } text-base text-center font-primary mx-2`}
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
          } text-base text-center font-primary px-2`}
        >
          Contact
        </a>
      </Link>
    </footer>
  );
}
