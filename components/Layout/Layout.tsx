import React, { PropsWithChildren } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

type Props = {
  children: React.ReactNode;
};
export default function Layout({
  children,
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <>
      <main>
        <Navigation />
        {children}
      </main>
      <Footer />
    </>
  );
}
