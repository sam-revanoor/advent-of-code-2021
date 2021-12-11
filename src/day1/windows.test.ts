import { windows } from "./windows";
import { input } from "./input";

const sampleInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

describe("windows", () => {
  it("return window sums for input", () => {
    expect(windows(sampleInput)).toEqual([
      607, 618, 618, 617, 647, 716, 769, 792,
    ]);
  });
});
