import { Section } from "components/@module";
import React from "react";

function Weight() {
  return (
    <Section title="Weight">
      <div className="flex flex-col gap-4 text-black">
        <div className="p-4 bg-white rounded-lg h3">Bold</div>
        <div className="p-4 !font-medium bg-white rounded-lg h3">Medium</div>
      </div>
    </Section>
  );
}

export default Weight;
