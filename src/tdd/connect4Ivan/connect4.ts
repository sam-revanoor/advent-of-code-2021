function make2DArray(cols: number, rows: number) {
  let array = new Array(cols);
  for (let i = 0; i < array.length; i++) {
    array[i] = new Array(rows).fill("x");
  }
  return array;
}

export const initBoard = (rows: number, columns: number): string[][] => {
  const grid = make2DArray(rows, columns);
  return grid;
};

const PLAYER_IVAN = "I";
const PLAYER_SAM = "S";

export const takeTurn = (
  columnNumber: number,
  playerSymbol: string,
  gameBoard: string[][]
): string[][] => {
  gameBoard[gameBoard.length - 1][columnNumber] = playerSymbol;
  return gameBoard;
};
