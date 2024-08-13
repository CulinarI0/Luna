"use client";
import React, { useState } from "react";

interface ICarouselProps {
  children: React.ReactNode[];
}

const Carousel = ({ children }: ICarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeSlide = (index: number) => {
    console.log("Changing index carousel", index);
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full">
        <div className="overflow-hidden">
          {children.map((child, index) => (
            <div
              key={index}
              className={`flex justify-center items-center w-full h-full ${
                index === activeIndex ? "block" : "hidden"
              }`}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Render buttons to navigate to each Box */}
      <div className="flex justify-center space-x-2 mt-4">
        {children.map((_, index) => (
          <button
            key={index}
            className={`py-2 px-4 text-sm font-medium rounded-md ${
              index === activeIndex ? "bg-red-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => changeSlide(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
