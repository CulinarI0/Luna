import React from "react";

interface ICardProps {
  content: string;
}
interface ICardListProps {
  items: string[];
}

function Card({ content }: ICardProps) {
  return (
    <div className="flex flex-col md:flex-row mb-2" id="Container">
      <div className="flex-auto px-4 md:px-8 py-4 md:py-6">
        <div id="NameText">
          <button className="text-sm hover:opacity-50">{content}</button>
        </div>
      </div>
    </div>
  );
}

export const CardList= ({ items } : ICardListProps) => {
  return (
    <>
      {items.map((item, index) => <Card key={index} content={item} />)}
    </>
  );
};