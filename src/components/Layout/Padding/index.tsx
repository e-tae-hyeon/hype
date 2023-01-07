import { Section } from "components/@module";
import { DefaultCard } from "components/Card";
import React from "react";

function Padding() {
  return (
    <Section title="Padding">
      <DefaultCard
        title="8px"
        description="Mini Card, 혹은 Tag 등에 사용합니다."
        className="p-2"
      />
      <DefaultCard
        title="16px"
        description="기본값으로 사용합니다."
        className="p-4"
      />
      <DefaultCard
        title="32px"
        description="내부요소가 적을 때, 혹은 여백을 강조할 때 사용합니다."
        className="p-8"
      />
    </Section>
  );
}

export default Padding;
