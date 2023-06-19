import { ICard } from './Types/ICard';
import CardsGrid from './components/CardsGrid';
import CARD_SETS from './components/constants/CARD_SETS';
import transformCards from './utils/transformCards';

async function getCoreCards(): Promise<ICard[]> {
  const res = await fetch('https://marvelcdb.com/api/public/cards/core.json');
  return res.json();
}

export default async function Home() {
  const cards = await getCoreCards();
  const transformedCards = transformCards(cards);

  return <CardsGrid cards={transformedCards} />;
}

export function generateStaticParams() {
  return CARD_SETS.map((cardSet) => {
    return {
      code: cardSet.code,
    };
  });
}
