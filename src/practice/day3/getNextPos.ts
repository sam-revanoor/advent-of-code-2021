import { appendNewTerrain } from "./appendNewTerrain";

export const getNextPos = (
  terrain: string[][],
  right: number,
  down: number,
  startingPosRow: number,
  startingPosCol: number
): string | number => {
  if (startingPosRow === terrain.length - 1) {
    return "no more rows";
  }
  if (
    !terrain[startingPosRow] ||
    startingPosCol === terrain[startingPosRow].length - 1 ||
    startingPosCol + right > terrain[startingPosRow].length - 1
  ) {
    return getNextPos(
      appendNewTerrain(terrain),
      right,
      down,
      startingPosRow,
      startingPosCol
    );
  }
  return terrain[startingPosRow + down][startingPosCol + right];
};
