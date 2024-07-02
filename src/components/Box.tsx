import React, { ReactNode } from "react";

interface IBoxProps {
  title: string;
  children?: ReactNode;
}

export function Box({ title, children }: IBoxProps) {
  return (
    <div
      className="flex justify-center items-center w-full h-full bg-zinc-300 shadow border border-black mx-2 my-4 sm:mx-4 md:mx-8 lg:max-w-lg xl:max-w-xl"
      id="Box"
    >
      <div
        className="text-black text-xl sm:text-2xl md:text-3xl font-normal font-['Inknut Antiqua'] text-center p-4"
        title={title}
      >
        <h1>{title}</h1>
        <div className="flex flex-col justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
