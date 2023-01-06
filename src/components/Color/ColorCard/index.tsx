import colors from "common/styles/colors";
import React from "react";

type Props = {
  title: string;
  hex: string;
  tw: string;
  textColor?: string;
};

function ColorCard({ title, hex, tw, textColor = colors.white }: Props) {
  return (
    <div
      className="flex flex-col justify-between flex-1 gap-4 p-4 rounded-lg"
      style={{ backgroundColor: hex }}
    >
      <h3 className={`${textColor} h3`}>{title}</h3>
      <div className={`${textColor} body1`}>
        {hex} | {tw}
      </div>
    </div>
  );
}

export default ColorCard;
