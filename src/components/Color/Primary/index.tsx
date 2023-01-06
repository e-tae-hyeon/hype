import { Section } from "components/@module";
import React from "react";
import ColorCard from "../ColorCard";

function Primary() {
  return (
    <Section title="Primary on yours">
      <div className="rounded-lg bg-gradient-to-r from-cyan-300 via-amber-400 to-red-500">
        <ColorCard title="Color" hex="hex" tw="tailwindcss" />
      </div>
    </Section>
  );
}

export default Primary;
