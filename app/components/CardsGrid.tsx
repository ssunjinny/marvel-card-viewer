import React from 'react';
import Image from 'next/image';

import { ITransformedCard } from '../Types/ITransformedCard';

interface ICardsGridProps {
  cards: ITransformedCard[];
}

function CardsGrid({ cards }: ICardsGridProps) {
  return (
    <div className="grid gap-4 grid-cols-4">
      {cards.map(({ imagesrc }) => {
        const src = `https://marvelcdb.com${imagesrc}`;
        return (
          <Image
            alt={imagesrc}
            key={imagesrc}
            src={src}
            width={300}
            height={420}
          />
        );
      })}
    </div>
  );
}

export default CardsGrid;
