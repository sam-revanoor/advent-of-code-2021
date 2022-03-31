import { takeTurn, initBoard } from "./connect4";

describe("initBoard", () => {
  // iteration 1
  //   it("returns true when you call play", () => {
  //     expect(play()).toEqual(true);
  //   });
  it("contains a grid of given size", () => {
    const grid = initBoard(6, 7);
    expect(grid.length).toEqual(6);
    expect(grid[0].length).toEqual(7);
  });
});

describe("play", () => {
  it("adds user's first turn to empty board", () => {
    const COLUMN_CHOICE = 2;
    const PLAYER_TOKEN = "I";

    let grid;
    grid = initBoard(6, 7);
    const updatedBoard = takeTurn(COLUMN_CHOICE, PLAYER_TOKEN, grid);
    expect(updatedBoard[6 - 1][COLUMN_CHOICE]).toBe(PLAYER_TOKEN);
  });
});

/*    1 2 3 4 5 6 7
    1 x x x x x x x
    2 x x x x x x x
    3 x x x x x x x
    4 x x x x x x x
    5 x x x x x x x
    6 x x O x x x x
*/

/*
[
    [x, x, x, x, x, x, x],
    [x, x, x, x, x, x, x],
    [x, x, x, x, x, x, x],
    [x, x, x, x, x, x, x],
    [x, x, x, x, x, x, x],
    [x, x, x, x, x, x, x],
]

*/
