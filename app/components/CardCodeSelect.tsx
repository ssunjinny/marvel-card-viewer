'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { Listbox } from '@headlessui/react';

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
    <Listbox value={code} onChange={handleCodeChange}>
      <Listbox.Button>{currentCard?.name}</Listbox.Button>
      <Listbox.Options>
        {CARD_SETS.map((set: ICardSet) => (
          <Listbox.Option key={set.id} value={set.code}>
            {set.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}

export default CardCodeSelect;
