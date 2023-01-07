import { Section } from "components/@module";
import React from "react";
import LayoutRow from "../LayoutRow";

function MediaQuery() {
  return (
    <Section title="Media Query">
      <LayoutRow
        name="Desktop"
        value="1024px"
        description="@media (min-width: 1024px) { ... } "
      />
      <LayoutRow
        name="Tablet"
        value="768px"
        description="@media (min-width: 768px) { ... }"
      />
      <LayoutRow
        name="Mobile"
        value="360px"
        description="@media (min-width: 360px) { ... }"
      />
    </Section>
  );
}

export default MediaQuery;
