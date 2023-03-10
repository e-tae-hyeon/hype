import { Row } from "components/@base";
import { Section } from "components/@module";
import React from "react";

function MaxWidth() {
  return (
    <Section title="Max Width">
      <Row
        name="Desktop"
        value="1024px or 1200px"
        description="컨텐츠 집중도를 위해 넓이를 제한합니다."
      />
      <Row
        name="Post in Desktop"
        value="768px"
        description="포스트 같은 게시글을 의미합니다. HYPE가 사용중입니다."
      />
    </Section>
  );
}

export default MaxWidth;
