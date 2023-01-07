import { Section } from "components/@module";
import React from "react";
import DefaultCard from "../DefaultCard";

function BorderRadius() {
  return (
    <Section title="Border Radius">
      <DefaultCard title="4px" className="p-4 rounded" />
      <DefaultCard
        title="8px"
        description="HYPE는 8px을 사용중입니다."
        className="p-4 rounded-lg"
      />
      <DefaultCard title="16px" className="p-4 rounded-2xl" />
    </Section>
  );
}

export default BorderRadius;
