async function getCoreCards() {
  const res = await fetch("https://marvelcdb.com/api/public/cards/core.json");
  return res.json();
}

export default async function Home() {
  const cardsData = getCoreCards();
  const cards = await Promise.all([cardsData]);

  return <></>;
}
