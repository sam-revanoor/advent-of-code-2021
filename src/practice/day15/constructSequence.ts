import { appendNextNumber } from "./appendNextNumber";

export const constructSequence = (
  startingNums: number[],
  value: number
): number => {
  let sequence = [...startingNums];
  while (sequence.length < value) {
    sequence = appendNextNumber(sequence);
  }
  return sequence[value - 1];
};
