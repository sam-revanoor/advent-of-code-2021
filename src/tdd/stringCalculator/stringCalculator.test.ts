import { stringCalculator } from "./stringCalculator";

describe("stringCalculator", () => {
  it("returns 0 if no numbers are given", () => {
    expect(stringCalculator()).toEqual(0);
  });

  it("returns number if one number is given", () => {
    expect(stringCalculator("1")).toEqual(1);
    expect(stringCalculator("9")).toEqual(9);
    expect(stringCalculator("45")).toEqual(45);
    expect(stringCalculator("72")).toEqual(72);
    expect(stringCalculator("6333")).toEqual(6333);
  });

  it("returns sum of two numbers given with any delimeter", () => {
    expect(stringCalculator("1, 2")).toEqual(3);
    expect(stringCalculator("45/5")).toEqual(50);
    expect(stringCalculator("6333 600")).toEqual(6933);
  });

  it("returns sum of all numbers given with any delimeter", () => {
    expect(stringCalculator("1, 2, 4")).toEqual(7);
    expect(stringCalculator("45/n5/n12")).toEqual(62);
    expect(stringCalculator("6333 600 24")).toEqual(6957);
  });
});
