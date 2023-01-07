import { Row } from "components/@base";
import { Section } from "components/@module";
import React from "react";

function MediaQuery() {
  return (
    <Section title="Media Query">
      <Row
        name="Desktop"
        value="1024px"
        description="@media (min-width: 1024px) { ... } "
      />
      <Row
        name="Tablet"
        value="768px"
        description="@media (min-width: 768px) { ... }"
      />
      <Row
        name="Mobile"
        value="360px"
        description="@media (min-width: 360px) { ... }"
      />
    </Section>
  );
}

export default MediaQuery;
