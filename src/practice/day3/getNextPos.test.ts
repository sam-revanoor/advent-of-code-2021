import { getNextPos } from "./getNextPos";

const sampleInput = [
  [".", ".", "#", "#", ".", ".", ".", ".", ".", ".", "."],
  ["#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "."],
  [".", "#", ".", ".", ".", ".", "#", ".", ".", "#", "."],
  [".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#"],
  [".", "#", ".", ".", ".", "#", "#", ".", ".", "#", "."],
  [".", ".", "#", ".", "#", "#", ".", ".", ".", ".", "."],
  [".", "#", ".", "#", ".", "#", ".", ".", ".", ".", "#"],
  [".", "#", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
  ["#", ".", "#", "#", ".", ".", ".", "#", ".", ".", "."],
  ["#", ".", ".", ".", "#", "#", ".", ".", ".", ".", "#"],
  [".", "#", ".", ".", "#", ".", ".", ".", "#", ".", "#"],
];

// const sampleInput2 = [
//   [".", ".", "#", "#", ".", ".", ".", ".", ".", ".", "."],
//   ["#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "."],
//   [".", "#", ".", ".", ".", ".", "#", ".", ".", "#", "."],
//   [".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#"],
//   [".", "#", ".", ".", ".", "#", "#", ".", ".", "#", "."],
//   [".", ".", "#", ".", "#", "#", ".", ".", ".", ".", "."],
//   [".", "#", ".", "#", ".", "#", ".", ".", ".", ".", "#"],
//   [".", "#", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
//   ["#", ".", "#", "#", ".", ".", ".", "#", ".", ".", "."],
//   ["#", ".", ".", ".", "#", "#", ".", ".", ".", ".", "#"],
//   [".", "#", ".", ".", "#", ".", ".", ".", "#", ".", "#"],
// ];

describe("getNextPos", () => {
  it("returns next position for a specified slope from a specific starting point", () => {
    expect(getNextPos(sampleInput, 3, 1, 0, 0)).toBe(".");
    expect(getNextPos(sampleInput, 2, 3, 0, 0)).toBe("#");
    expect(getNextPos(sampleInput, 5, 3, 0, 0)).toBe(".");
    expect(getNextPos(sampleInput, 1, 4, 0, 0)).toBe("#");
    expect(getNextPos(sampleInput, 10, 4, 0, 0)).toBe(".");
    expect(getNextPos(sampleInput, 3, 1, 1, 2)).toBe(".");
    expect(getNextPos(sampleInput, 3, 2, 2, 3)).toBe("#");
    // expect(getNextPos(sampleInput, 3, 2, 3, 8)).toBe("no more columns");
    expect(getNextPos(sampleInput, 3, 1, 10, 3)).toBe("no more rows");
  });
  it("returns next position for a specified slope from a specific starting point if position is outside range", () => {
    expect(getNextPos(sampleInput, 3, 2, 3, 8)).toBe(".");
    expect(getNextPos(sampleInput, 5, 1, 1, 9)).toBe(".");
    expect(getNextPos(sampleInput, 4, 1, 4, 7)).toBe(".");
    expect(getNextPos(sampleInput, 6, 5, 3, 5)).toBe("#");
    expect(getNextPos(sampleInput, 20, 1, 1, 9)).toBe(".");
    expect(getNextPos(sampleInput, 3, 1, 10, 3)).toBe("no more rows");
  });
});
