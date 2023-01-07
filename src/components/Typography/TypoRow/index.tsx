import React from "react";

type Props = {
  className: string;
  font: string;
  css: string;
};

function TypoRow({ className, font, css }: Props) {
  return (
    <div className="flex items-center justify-between h-16">
      <div className={className}>{font}</div>
      <div className="caption">{css}</div>
    </div>
  );
}

export default TypoRow;
