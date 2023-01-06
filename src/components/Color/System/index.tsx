import { Section } from "components/@module";
import React from "react";
import ColorCard from "../ColorCard";

function System() {
  return (
    <Section title="System">
      <ColorCard title="Success" hex="#22C55E" tw="green-500" />
      <ColorCard title="Warning" hex="#FACC15" tw="yellow-400" />
      <ColorCard title="Danger" hex="#EF4444" tw="red-500" />
    </Section>
  );
}

export default System;
