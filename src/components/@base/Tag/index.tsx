import React from "react";

type Props = {
  content: string;
};

function Tag({ content }: Props) {
  return (
    <div className="flex items-center justify-center px-2 text-black rounded bg-neutral-300 body2">
      {content}
    </div>
  );
}

export default Tag;
