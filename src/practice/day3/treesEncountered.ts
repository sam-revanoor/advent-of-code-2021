import { getNextPos } from "./getNextPos";

export const treesEncountered = (
  terrain: string[][],
  right: number,
  down: number,
  startingPosRow: number,
  startingPosCol: number
): number => {
  let pitStops = [];
  if (startingPosRow === terrain.length - 1) {
    console.log("eweoeoeo");
    return 1;
  } else {
    pitStops.push(
      getNextPos(terrain, right, down, startingPosRow, startingPosCol)
    );
    treesEncountered(
      terrain,
      right,
      down,
      startingPosRow + right,
      startingPosCol + down
    );
    console.log(pitStops);
    return 1;
  }
};
