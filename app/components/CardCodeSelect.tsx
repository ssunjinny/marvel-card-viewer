'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import CARD_SETS from './constants/CARD_SETS';
import { ICardSet } from '../Types/ICardSet';

interface ICardCodeSelectProps {
  code: string;
}

function CardCodeSelect({ code }: ICardCodeSelectProps) {
  const router = useRouter();

  const currentCard = !!code
    ? CARD_SETS.find((set: ICardSet) => set.code === code)
    : CARD_SETS[0];

  const handleCodeChange = (code: string) => {
    router.push(`/${code}`);
  };

  return (
    <select
      onChange={(e) => handleCodeChange(e.target.value)}
      className="select select-bordered w-full max-w-xs"
    >
      {CARD_SETS.map((set: ICardSet) => (
        <option key={set.code} value={set.code}>
          {set.name}
        </option>
      ))}
    </select>
  );
}

export default CardCodeSelect;
