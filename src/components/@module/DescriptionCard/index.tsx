import { CardBase } from "components/@base";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

function DescriptionCard({ title, children }: Props) {
  return (
    <CardBase>
      <div className="flex flex-col gap-4">
        <h3 className="body1">{title}</h3>
        <p className="text-gray-400 body2">{children}</p>
      </div>
    </CardBase>
  );
}

export default DescriptionCard;
