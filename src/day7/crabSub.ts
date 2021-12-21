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
  // get distance between current submarine and target horizontal pos
  const absDistance = Math.abs(num - i);
  // create an array with from 0 to target position (hence the +1),
  // increasing by 1 each time

  // ex: [...Array(10)] will give you an array with 10 undefined elements
  // but doing the .keys() gives you the key of each undefined element
  // which is really what we want

  // for each position, add it to the accumulator until you get to the target
  // the final value is the "total fuel" for that particular submarine
  // to get to the target position

  const distanceWithNewFuel = [...Array(absDistance + 1).keys()].reduce(
    (a, b) => a + b,
    0
  );
  return distanceWithNewFuel;
}
