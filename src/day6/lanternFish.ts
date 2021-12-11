export const lanternFish = (fish: number[], days: number): number => {
  let result = fish;
  for (let day = 0; day < days; day++) {
    result = fishCounter(result);
  }
  return result.length;
};

function fishCounter(fish: number[]): number[] {
  if (!fish.includes(0)) {
    fish = nextDayWithNoNewFish(fish);
    return fish;
  }
  fish = nextDayWithNewFish(fish);
  return fish;
}

function nextDayWithNoNewFish(fish: number[]): number[] {
  fish = fish.map((f) => {
    return f - 1;
  });
  return fish;
}

function nextDayWithNewFish(fish: number[]): number[] {
  const existingFish = fish.map((f) => {
    if (f === 0) {
      return 6;
    }
    return f - 1;
  });
  const zeroFish = fish.filter((f) => {
    return f === 0;
  });
  const babyFish = zeroFish.map((f) => {
    return 8;
  });
  return [...existingFish, ...babyFish];
}
