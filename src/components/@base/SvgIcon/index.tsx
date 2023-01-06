import colors from "common/styles/colors";
import React from "react";
import * as Icons from "./icons";

type Props = {
  name: keyof typeof Icons;
  size?: number;
  color?: string;
};

function SvgIcon({ name, size = 24, color = colors.white }: Props) {
  const Icon = Icons[name];

  return <Icon width={size} height={size} color={color} />;
}

export default SvgIcon;
