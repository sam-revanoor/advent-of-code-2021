import { fibonacciGenerator } from "./fibonacciGenerator";

describe("fibonacciGenerator", () => {
  it("returns the sequence of first 8 values of fibonacci sequence", () => {
    expect(fibonacciGenerator(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  it("returns the sequence of first 9 values of fibonacci sequence", () => {
    expect(fibonacciGenerator(9)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
  });

  it("returns the sequence of first 11 values of fibonacci sequence", () => {
    expect(fibonacciGenerator(11)).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
    ]);
  });

  it("returns first 50 values of sequence if input is over 50", () => {
    expect(fibonacciGenerator(70).length).toBe(50);
  });
});
