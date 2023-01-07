import { Section } from "components/@module";
import React from "react";
import ColorCard from "../ColorCard";

function Grayscale() {
  return (
    <Section title="Grayscale">
      <ColorCard
        title="White"
        hex="#FFFFFF"
        tw="white"
        textColor="text-black"
      />
      <ColorCard
        title="Gray #1"
        hex="#F5F5F5"
        tw="neutral-100"
        textColor="text-black"
      />
      <ColorCard
        title="Gray #2"
        hex="#E5E5E5"
        tw="neutral-200"
        textColor="text-black"
      />
      <ColorCard
        title="Gray #3"
        hex="#D4D4D4"
        tw="neutral-300"
        textColor="text-black"
      />
      <ColorCard
        title="Gray #4"
        hex="#A3A3A3"
        tw="neutral-400"
        textColor="text-black"
      />
      <ColorCard title="Gray #5" hex="#737373" tw="neutral-500" />
      <ColorCard title="Gray #6" hex="#525252" tw="neutral-600" />
      <ColorCard title="Gray #7" hex="#404040" tw="neutral-700" />
      <div className="rounded-lg shadow-md shadow-neutral-700">
        <ColorCard title="Gray #8" hex="#262626" tw="neutral-800" />
      </div>
      <ColorCard title="Black" hex="#171717" tw="neutral-900" />
    </Section>
  );
}

export default Grayscale;
