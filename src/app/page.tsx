"use client";
import { Card } from "@/components/Card";
import { Box } from "@/components/Box";
import "rsuite/dist/rsuite.min.css";
import { Carousel } from "rsuite";
import React, { useState, useEffect } from "react";
export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const wineList = ["Merlot", "Sauvignon Blanc", "Malbec", "Pinot Grigio"];
  const cocktailList = ["Pina Colada", "Mojito", "Old Fashioned", "Negroni"];
  const foodList = ["Lasagna", "Beef Burger", "Chicken Katsu Curry", "Grilled Aubergine"];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const renderCards = (items: string[]) => items.map((item) => <Card content={item} />);
  return (
    <div className="flex justify-center items-center w-full">
      {isMobile ? (
        <Carousel autoplay={true} className="custom-slider" placement="bottom" shape="bar">
          <Box title="Wine List">{renderCards(wineList)}</Box>
          <Box title="Cocktail List">{renderCards(cocktailList)}</Box>
          <Box title="Food List">{renderCards(foodList)}</Box>
        </Carousel>
      ) : (
        <div className="flex justify-center items-center w-full">
          <Box title="Wine List">{renderCards(wineList)}</Box>
          <Box title="Cocktail List">{renderCards(cocktailList)}</Box>
          <Box title="Food List">{renderCards(foodList)}</Box>
        </div>
      )}
    </div>
  );
}
