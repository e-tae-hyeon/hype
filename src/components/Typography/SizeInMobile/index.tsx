import { Section } from "components/@module";
import React from "react";
import TypoRow from "../TypoRow";

function SizeInMobile() {
  return (
    <Section title="Size in Mobile">
      <div className="flex flex-col gap-4">
        <TypoRow
          className="text-4xl font-bold"
          font="Hero"
          css="Bold 36px 2.25rem"
        />
        <TypoRow
          className="text-[32px] font-bold"
          font="Head1"
          css="Bold 32px 2rem"
        />
        <TypoRow
          className="text-2xl font-bold"
          font="Head2"
          css="Bold 24px 1.5rem"
        />
        <TypoRow
          className="text-[20px] font-bold"
          font="Head3"
          css="Bold 20px 1.25rem"
        />
        <TypoRow className="body1" font="Body1" css="Medium 16px 1rem" />
        <TypoRow className="body2" font="Body2" css="Medium 14px 0.875rem" />
        <TypoRow className="caption" font="Caption" css="Medium 12px 0.75rem" />
      </div>
    </Section>
  );
}

export default SizeInMobile;
