import { ICard } from '../Types/ICard';
import CardsGrid from '../components/CardsGrid';
import transformCards from '../utils/transformCards';

interface IHomeProps {
  params: {
    code: string;
  };
}

async function getCoreCards(code: string): Promise<ICard[]> {
  const res = await fetch(
    `https://marvelcdb.com/api/public/cards/${code}.json`
  );
  return res.json();
}

export default async function Home({ params }: IHomeProps) {
  const cards = await getCoreCards(params.code);
  const transformedCards = transformCards(cards);

  return <CardsGrid cards={transformedCards} />;
}
