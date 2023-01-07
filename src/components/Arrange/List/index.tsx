import { Section } from "components/@module";
import { DefaultCard } from "components/Card";
import React from "react";

function List() {
  return (
    <Section title="List Example">
      <div className="flex flex-col gap-4">
        <DefaultCard
          title="List Layout"
          description="행 또는 열로 표현된 레이아웃을 의미합니다."
        />
        <DefaultCard title="Flex" description="display : flex" />
        <DefaultCard
          title="Gap 16px"
          description="HYPE의 모든 리스트 레이아웃이 사용중입니다."
        />
      </div>
    </Section>
  );
}

export default List;
