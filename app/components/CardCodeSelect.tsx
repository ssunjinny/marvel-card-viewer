'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';

import CARD_SETS from './constants/CARD_SETS';
import { ICardSet } from '../Types/ICardSet';

function CardCodeSelect() {
  const router = useRouter();
  const params = useParams();

  const handleCodeChange = (selected: string) => {
    router.push(`/${selected}`);
  };

  const sortedCardSets = CARD_SETS.sort((a: ICardSet, b: ICardSet) => {
    return a.code.localeCompare(b.code);
  });

  const currentCodeSelected = params.code;
  return (
    <select
      value={!!currentCodeSelected ? currentCodeSelected : 'core'}
      onChange={(e) => handleCodeChange(e.target.value)}
      className="select select-bordered w-full max-w-xs"
    >
      {sortedCardSets.map((set: ICardSet) => (
        <option key={set.code} value={set.code}>
          {set.name}
        </option>
      ))}
    </select>
  );
}

export default CardCodeSelect;
