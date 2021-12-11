export const appendNextNumber = (sequence: number[]): number[] => {
  let nextNumber = 0;
  const mutableSequence = [...sequence];
  const lastNumberInSequence = mutableSequence.pop();
  const filteredSequence = mutableSequence.filter((num) => {
    return num === lastNumberInSequence;
  });
  if (filteredSequence.length !== 0) {
    const previousOccurrenceOfSameNumber =
      mutableSequence.lastIndexOf(lastNumberInSequence);
    nextNumber = mutableSequence.length - previousOccurrenceOfSameNumber;
  }
  return [...sequence, nextNumber];
};
