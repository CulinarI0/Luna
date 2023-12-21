import React, { ReactNode } from "react";

interface IBoxProps {
  title: string;
  children?: ReactNode;
}
export function Box({ title, children }: IBoxProps) {
  return (
    <div
      className="w-full md:w-[351px] h-auto md:h-[728px] bg-zinc-300 shadow border border-black mx-2 md:mx-8 my-4"
      id="Box"
    >
      <div
        className="text-black text-4xl font-normal font-['Inknut Antiqua'] text-center p-4"
        title={title}
      >
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}
