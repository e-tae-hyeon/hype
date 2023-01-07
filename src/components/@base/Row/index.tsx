import React from "react";

type Props = {
  name: string;
  value: string;
  description?: string;
};

function Row({ name, value, description }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="h3">{name}</h3>
        <div className="h3">{value}</div>
      </div>
      <div className="text-neutral-400 caption">{description}</div>
    </div>
  );
}

export default Row;
