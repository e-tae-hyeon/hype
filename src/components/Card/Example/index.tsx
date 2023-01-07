import { Section } from "components/@module";
import Image from "next/image";
import React from "react";
import logo from "assets/images/hype-square.png";
import ImageCard from "../ImageCard";

function Example() {
  return (
    <Section title="Example">
      <div className="flex flex-col gap-2 p-4 bg-white rounded-lg">
        <div className="text-black body1">Title Body1 Black</div>
        <div className="body2 text-neutral-400">Body Body2 Gray #4</div>
        <div className="caption text-neutral-400">caption Caption Gray #4</div>
      </div>
      <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
        <div className="relative w-10 h-10 rounded-full">
          <Image src={logo} alt="logo" fill style={{ borderRadius: 9999 }} />
        </div>
        <div className="flex flex-col">
          <div className="text-black body1">Title Body1 Black</div>
          <div className="caption text-neutral-400">
            caption Caption Gray #4
          </div>
        </div>
      </div>
      <ImageCard />
      <ImageCard tags={["Tag", "body2", "px-8px"]} />
    </Section>
  );
}

export default Example;
