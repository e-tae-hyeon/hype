import React from "react";
import logo from "assets/images/hype-square.png";
import Image from "next/image";
import { Tag } from "components/@base";

type Props = {
  tags?: string[];
};

function ImageCard({ tags }: Props) {
  return (
    <div className="flex flex-col">
      <div className="relative w-full rounded-t-lg aspect-video">
        <Image
          src={logo}
          alt="logo"
          fill
          style={{
            objectFit: "cover",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        />
      </div>
      <div className="flex flex-col gap-4 p-4 bg-white rounded-b-lg">
        {tags && (
          <div className="flex items-center gap-2">
            {tags?.map((T) => (
              <Tag content={T} key={T} />
            ))}
          </div>
        )}
        <div>
          <div className="text-black body1">Title Body1 Black</div>
          <div className="body2 text-neutral-400">Body Body2 Gray #4</div>
        </div>
        <div className="caption text-neutral-400">Author Caption Gray #4 </div>
      </div>
    </div>
  );
}

export default ImageCard;
