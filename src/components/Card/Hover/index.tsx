import { Section } from "components/@module";
import React from "react";
import DefaultCard from "../DefaultCard";

function Hover() {
  return (
    <Section title="Hover">
      <DefaultCard
        title="Shadow"
        description="box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);"
        className="duration-300 hover:shadow-xl hover:shadow-red-500"
      />
      <DefaultCard
        title="Translate Y"
        description="transform: translateY(-0.25rem)"
        className="duration-150 hover:-translate-y-1"
      />
      <DefaultCard
        title="Cursor Pointer"
        description="cursor: pointer"
        className="cursor-pointer"
      />
    </Section>
  );
}

export default Hover;
