import { CardBase } from "components/@base";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

function Section({ title, children }: Props) {
  return (
    <CardBase>
      <h2 className="h2">{title}</h2>
      {children}
    </CardBase>
  );
}

export default Section;
