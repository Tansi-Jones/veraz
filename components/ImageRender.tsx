"use client";

import { PhotoIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const ImageRender = ({ src, alt, width, height }: Props) => {
  const [showImage, setShowImage] = useState(false);
  const handleViewImage = () => {
    setShowImage((prev) => !prev);
  };

  return (
    <>
      <button
        className="text-primary flex items-center space-x-2 mt-1 hover:underline"
        onClick={handleViewImage}
      >
        <span>
          <PhotoIcon className="h-5 w-5" />
        </span>
        <span>{showImage ? "hide image" : "view image"}</span>
      </button>
      {showImage && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
        />
      )}
    </>
  );
};
