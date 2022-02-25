export const fibonacciGenerator = (number: number): number[] => {
  const fibonacciSequence = [0, 1, 1, 2, 3, 5, 8, 13];

  while (fibonacciSequence.length < number && fibonacciSequence.length < 50) {
    const lastVal = fibonacciSequence[fibonacciSequence.length - 1];
    const secondLastVal = fibonacciSequence[fibonacciSequence.length - 2];

    fibonacciSequence.push(lastVal + secondLastVal);
  }

  return fibonacciSequence;
};
