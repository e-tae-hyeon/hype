import { Section } from "components/@module";
import React from "react";

function Grid() {
  return (
    <Section title="Grid Example">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center gap-4 p-4 bg-white rounded-lg aspect-[3/4]">
          <div className="text-black body1">Grid Layout</div>
          <div className="text-center caption text-neutral-400">
            행 과 열로 표현된 <br /> 레이아웃을 의미합니다.
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-4 bg-white rounded-lg aspect-[3/4]">
          <div className="text-black body1">Grid</div>
          <div className="caption text-neutral-400">display : grid</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-4 bg-white rounded-lg aspect-[3/4]">
          <div className="text-black body1">Columns 2</div>
          <div className="text-center caption text-neutral-400">
            grid-template-columns: repeat(2, minmax(0, 1fr));
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-4 bg-white rounded-lg aspect-[3/4]">
          <div className="text-black body1">Gap 32px</div>
          <div className="caption text-neutral-400" />
        </div>
      </div>
    </Section>
  );
}

export default Grid;
