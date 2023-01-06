import React from "react";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return <div className="max-w-5xl mx-auto">{children}</div>;
}

export default Layout;
