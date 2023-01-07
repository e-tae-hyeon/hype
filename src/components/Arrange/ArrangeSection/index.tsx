import { Section } from "components/@module";
import React from "react";

function ArrangeSection() {
  return (
    <Section title="Section Example">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 p-4 bg-white rounded-lg">
          <h2 className="text-black h2">Section Layout</h2>
          <div className="text-neutral-400 body1">
            영역과 영역을 의미합니다.
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 bg-white rounded-lg">
          <h2 className="text-black h2">Gap 48px</h2>
          <div className="text-neutral-400 body1">
            HYPE의 모든 섹션 레이아웃이 사용중입니다.
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ArrangeSection;
