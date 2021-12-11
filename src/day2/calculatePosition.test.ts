import { calculatePosition } from "./calculatePosition";
import { input } from "./input";

// const sampleInput1 = [{ forward: 5 }, { down: 5 }, { forward: 8 }, { up: 3 }];
const sampleInput2 = [
  { forward: 5 },
  { down: 5 },
  { forward: 8 },
  { up: 3 },
  { down: 8 },
  { forward: 2 },
];

describe("calculatePosition", () => {
  it("calculates forward position and depth position", () => {
    // expect(calculatePosition(sampleInput1)).toEqual(26);
    expect(calculatePosition(sampleInput2)).toEqual(900);
    expect(calculatePosition(input)).toEqual(1463827010);
  });
});
