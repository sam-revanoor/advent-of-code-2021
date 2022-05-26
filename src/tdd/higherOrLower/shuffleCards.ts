export const shuffleCards = (numberOfCards: number): number[] => {
  const cardsInOrder = [...Array(numberOfCards).keys()].map((x) => x + 1);
  return cardsInOrder
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};
