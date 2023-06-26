import React from "react";
import Fade from "react-reveal/Fade";
import { Props } from "./Header.types";

const Header: React.FC<Props> = function ({ pageTitle }) {
  return (
    <Fade>
      <div className="pt-20 relative overflow-hidden mb-6 md:mb-10">
        <h1 className="text-center uppercase font-primary font-bold font-primary pointer-events-none select-none text-2xl mb-1 md:mb-0 md:text-4xl">
          {pageTitle}
        </h1>
      </div>
    </Fade>
  );
};

export default Header;
