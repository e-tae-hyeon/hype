import { Row } from "components/@base";
import { Section } from "components/@module";
import React from "react";

function Display() {
  return (
    <Section title="Display">
      <Row
        name="Single Direction"
        value="display : flex"
        description="행 또는 열. 1차원의 레이아웃 표현할 때 사용합니다."
      />
      <Row
        name="Double Direction"
        value="display : grid"
        description="행과 열. 2차원의 레이아웃 표현할 때 사용합니다"
      />
    </Section>
  );
}

export default Display;
