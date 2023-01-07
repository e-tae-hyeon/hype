import { SectionBase } from "components/@base";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

function Section({ title, children }: Props) {
  return (
    <SectionBase>
      <div className="flex flex-col gap-4">
        <h2 className="h2">{title}</h2>
        {children}
      </div>
    </SectionBase>
  );
}

export default Section;
