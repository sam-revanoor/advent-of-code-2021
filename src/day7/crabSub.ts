export const crabSub = (input: number[]): number => {
  const subs = sortInput(input);
  const minSub = subs[0];
  const maxSub = subs[subs.length - 1];
  let fuelUsed: Record<number, number> = {};
  let distances: number[] = [];
  let total: number;
  for (let i = minSub; i <= maxSub; i++) {
    distances = subs.map((sub) => {
      return getDistance(sub, i);
      //   pt 1: return Math.abs(sub - i);
    });
    total = distances.reduce((a, b) => a + b, 0);
    fuelUsed[i] = total;
  }
  const minDistance = Math.min.apply(Math, Object.values(fuelUsed));
  return minDistance;
};

function sortInput(input: number[]): number[] {
  return input.sort((a, b) => {
    return a - b;
  });
}

function getDistance(num: number, i: number): number {
  const absDistance = Math.abs(num - i);
  const distanceWithNewFuel = [...Array(absDistance + 1).keys()].reduce(
    (a, b) => a + b,
    0
  );
  return distanceWithNewFuel;
}
