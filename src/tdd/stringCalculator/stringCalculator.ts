export const stringCalculator = (numbers?: string): number => {
  if (!numbers) return 0;

  const numArray = numbers.split("");
  const delimeter = [
    ...new Set(numArray.filter((val) => isNaN(parseInt(val)))),
  ].join("");

  if (!delimeter) {
    return parseInt(numbers);
  }

  const numberVals = numbers.split(delimeter);
  return numberVals.reduce((prevValue, currentVal) => {
    return prevValue + parseInt(currentVal);
  }, 0);
};
