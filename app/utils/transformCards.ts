import { ICard } from '../Types/ICard';
import { ITransformedCard } from '../Types/ITransformedCard';

export default function transformCards(cards: ICard[]): ITransformedCard[] {
  return cards.map((card) => {
    return {
      imagesrc: `https://marvelcdb.com${card.imagesrc}`,
    };
  });
}
