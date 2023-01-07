import { PRTENDARD_URL } from "common/constants/string";
import { Section } from "components/@module";
import React from "react";

function Font() {
  return (
    <Section title="Font">
      <a
        href={PRTENDARD_URL}
        className="duration-150 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500"
      >
        <div className="p-4 text-black bg-white rounded-lg">
          <h3 className="h3">Pretendard</h3>
          <div className="body1">프리텐다드</div>
          <div className="flex justify-end caption text-neutral-400">
            바로가기
          </div>
        </div>
      </a>
    </Section>
  );
}

export default Font;
