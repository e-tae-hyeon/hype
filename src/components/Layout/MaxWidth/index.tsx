import { Section } from "components/@module";
import React from "react";
import LayoutRow from "../LayoutRow";

function MaxWidth() {
  return (
    <Section title="Max Width">
      <LayoutRow
        name="Desktop"
        value="1024px or 1200px"
        description="컨텐츠 집중도를 위해 넓이를 제한합니다."
      />
      <LayoutRow
        name="Post in Desktop"
        value="768px"
        description="포스트 같은 게시글을 의미합니다."
      />
    </Section>
  );
}

export default MaxWidth;
