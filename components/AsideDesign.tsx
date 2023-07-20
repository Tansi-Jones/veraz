"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export interface AsideDesignProps {
  children: React.ReactNode;
}

export const AsideDesign = ({ children }: AsideDesignProps) => {
  const path = usePathname();

  return (
    <div className="relative">
      <div className="absolute w-10 lg:w-14 h-[20rem] lg:h-[27rem] lg:left-0 top-28">
        <Image
          className={path === "/" ? "opacity-100" : "opacity-10"}
          src="/png/shape-1.png"
          alt="Design Shapes Left"
          fill
          sizes="100%"
          priority
        />
      </div>
      {children}
      <div className="absolute w-24 h-48 right-0 bottom-0">
        <Image
          className={path === "/" ? "opacity-100" : "opacity-10"}
          src="/png/shape-2.png"
          alt="Design Shapes Right"
          fill
          sizes="100%"
          priority
        />
      </div>
    </div>
  );
};
