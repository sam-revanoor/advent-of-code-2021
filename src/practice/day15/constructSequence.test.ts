import { constructSequence } from "./constructSequence";

describe("constructSequence", () => {
  it("returns 10th number in sequence for given array", () => {
    expect(constructSequence([0, 3, 6], 10)).toBe(0);
  });

  it("returns the 2020th number of the sequence in a given array", () => {
    expect(constructSequence([1, 3, 2], 2020)).toBe(1);
    expect(constructSequence([2, 1, 3], 2020)).toBe(10);
    expect(constructSequence([1, 2, 3], 2020)).toBe(27);
    expect(constructSequence([2, 3, 1], 2020)).toBe(78);
    expect(constructSequence([3, 2, 1], 2020)).toBe(438);
    expect(constructSequence([3, 1, 2], 2020)).toBe(1836);
    expect(constructSequence([15, 5, 1, 4, 7, 0], 2020)).toBe(1259);
  });
  // it("returns the 30000000th number of the sequence in a given array", () => {
  //   expect(constructSequence([0, 3, 6], 30000000)).toBe(175594);
  //   expect(constructSequence([1, 3, 2], 30000000)).toBe(2578);
  //   expect(constructSequence([2, 1, 3], 30000000)).toBe(3544142);
  //   expect(constructSequence([1, 2, 3], 30000000)).toBe(261214);
  //   expect(constructSequence([2, 3, 1], 30000000)).toBe(6895259);
  //   expect(constructSequence([3, 2, 1], 30000000)).toBe(18);
  //   expect(constructSequence([3, 1, 2], 30000000)).toBe(362);
  // });
});
