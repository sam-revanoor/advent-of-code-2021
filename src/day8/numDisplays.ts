export const numDisplays = (displays: string[]): number => {
  const input = parseInput(displays);
  const uniqueVals = calculateUniqueVals(input);
  return uniqueVals;
};

function parseInput(input: string[]): string[] {
  return input.map((val) => val.split(" | ")[1]);
}

function calculateUniqueVals(displays: string[]): number {
  let count = 0;
  const uniqueValues = [2, 3, 4, 7];
  displays.forEach((display) => {
    display.split(" ").forEach((val) => {
      if (uniqueValues.includes(val.length)) {
        count += 1;
      }
    });
  });
  return count;
}
