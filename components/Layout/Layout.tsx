import React, { PropsWithChildren } from "react";
import Navigation from "../Navigation/Navigation";

type Props = {
  children: React.ReactNode;
};
export default function Layout({
  children,
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
