import React from 'react';

interface ICardProps {
  content: string;
}

export function Card({ content }: ICardProps) {
  return (
    <div className="flex flex-row mb-2" id="Container">
      <div className="flex-auto px-8 py-6">
        <div id="NameText">
          <button className='text-sm hover:opacity-50'>{content}</button>        
        </div>
      </div>
    </div>
  );
}
