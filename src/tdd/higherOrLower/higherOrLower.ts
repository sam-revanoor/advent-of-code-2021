import { shuffleCards } from "./shuffleCards";

type HigherOrLowerOptions = "higher" | "lower";

export const playGame = (guess: HigherOrLowerOptions) => {
  const { firstCard, remainingCards } = startGame(10);
};

export const playTurn = (
  currentCard: number,
  remainingCards: number[],
  guess: HigherOrLowerOptions
): { result: boolean; currentCard: number; remainingCards: number[] } => {
  console.log({ guess, currentCard, remainingCards });
  const newRemainingCards = [...remainingCards];
  const newCurrentCard = newRemainingCards.shift();

  let result = false;

  if (guess === "higher") {
    result = currentCard < newCurrentCard;
  } else {
    result = currentCard > newCurrentCard;
  }

  return {
    result,
    currentCard: newCurrentCard,
    remainingCards: newRemainingCards,
  };
};

export const startGame = (
  numberOfCards: number
): { firstCard: number; remainingCards: number[] } => {
  const cards = shuffleCards(numberOfCards);
  const firstCard = cards.shift();
  return { firstCard, remainingCards: cards };
};

// create the shuffled deck of cards
// displays first value

// const { firstCard, remainingCards } = startGame(10);
// console.log(firstCard);

// let hasLost = false;

// let guess: HigherOrLowerOptions = "higher";
// if (firstCard > 5) {
//   guess = "lower";
// }

// const res = playTurn(firstCard, remainingCards, guess);
// console.log(res);

// while (remainingCards.length > 0 && !hasLost){

// }

// if (!res) console.log("GAME OVER!!!");

// console.log("hey");
