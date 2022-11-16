import React, { PropsWithChildren } from "react";
import Navigation from "../Navigation/Navigation";

type Props = {
  children: React.ReactNode;
  font: string;
};
export default function Layout({
  children,
  font,
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <main className={font}>
      <Navigation />
      {children}
    </main>
  );
}
