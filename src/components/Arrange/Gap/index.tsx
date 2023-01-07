import { Row } from "components/@base";
import { Section } from "components/@module";
import React from "react";

function Gap() {
  return (
    <Section title="Gap">
      <Row name="List" value="16px" />
      <Row name="Grid" value="32px" />
      <Row name="Section" value="48px" />
    </Section>
  );
}

export default Gap;
