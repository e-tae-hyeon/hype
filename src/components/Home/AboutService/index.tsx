import { DescriptionCard } from "components/@module";
import React from "react";

function AboutService() {
  return (
    <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-8">
      <DescriptionCard title="디자인 어려우신가요?">
        디자이너가 없어도, 디자인을 몰라도 <br />
        유려한 디자인을 만들 수 있도록 <br />
        다양한 서비스를 분석해 가이드를 만들었습니다.
      </DescriptionCard>
      <DescriptionCard title="프론트엔드 개발자가 만들었습니다.">
        나홀로 개발자들을 위해 <br />
        자주 사용하는 UI를 가이드로 만들었습니다. <br />
        누구나 아름다운 디자인을 가질 수 있도록.
      </DescriptionCard>
    </div>
  );
}

export default AboutService;
