import React from "react";

type Props = {
  children: React.ReactNode;
};

function CardBase({ children }: Props) {
  return (
    <div className="flex flex-col p-4 rounded-lg bg-neutral-800">
      {children}
    </div>
  );
}

export default CardBase;
