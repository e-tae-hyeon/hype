import React from "react";

type Props = {
  className: string;
  title: string;
  description?: string;
};

function DefaultCard({ className, title, description }: Props) {
  return (
    <div
      className={`${className} flex flex-col bg-white gap-4 rounded-lg min-h-[94px] justify-between p-4`}
    >
      <h3 className="text-black body1">{title}</h3>
      <div className="caption text-neutral-400">{description}</div>
    </div>
  );
}

export default DefaultCard;
