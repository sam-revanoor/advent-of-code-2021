export const getProduct = (
  numbers: number[],
  sum: number,
  n: number
): number => {
  let product;
  if (n === 2) {
    for (let i = 0; i < numbers.length - 1; i++) {
      for (let j = 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === sum) {
          return (product = numbers[i] * numbers[j]);
        }
      }
    }
  } else {
    for (let i = 0; i < numbers.length - 2; i++) {
      for (let j = 1; j < numbers.length - 1; j++) {
        for (let k = 2; k < numbers.length; k++) {
          if (numbers[i] + numbers[j] + numbers[k] === sum) {
            return (product = numbers[i] * numbers[j] * numbers[k]);
          }
        }
      }
    }
  }
  return product;
};
