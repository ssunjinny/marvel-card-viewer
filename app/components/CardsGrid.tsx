import React from 'react';
import Image from 'next/image';

import { ITransformedCard } from '../Types/ITransformedCard';
import FloatingButton from './FloatingButton';

interface ICardsGridProps {
  cards: ITransformedCard[];
}

function CardsGrid({ cards }: ICardsGridProps) {
  return (
    <div className="relative grid gap-4 grid-cols-1 lg:grid-cols-4">
      {cards.map(({ imagesrc }) => {
        return (
          <Image
            alt={imagesrc}
            key={imagesrc}
            src={imagesrc}
            width={300}
            height={420}
          />
        );
      })}
      <FloatingButton />
    </div>
  );
}

export default CardsGrid;
