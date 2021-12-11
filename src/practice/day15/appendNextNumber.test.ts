/* Given the starting numbers 1,3,2, the 2020th number spoken is 1.
Given the starting numbers 2,1,3, the 2020th number spoken is 10.
Given the starting numbers 1,2,3, the 2020th number spoken is 27.
Given the starting numbers 2,3,1, the 2020th number spoken is 78.
Given the starting numbers 3,2,1, the 2020th number spoken is 438.
Given the starting numbers 3,1,2, the 2020th number spoken is 1836 */

import { appendNextNumber } from "./appendNextNumber";

describe("gets next number from sequence", () => {
  it("returns 0 if the last number in the sequence is unique", () => {
    expect(appendNextNumber([0, 3, 6])).toEqual([0, 3, 6, 0]);
    expect(appendNextNumber([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5, 0]);
    expect(appendNextNumber([4, 7, 3, 2, 1, 9])).toEqual([4, 7, 3, 2, 1, 9, 0]);
    expect(appendNextNumber([4, 7, 9, 2, 1, 9])).toEqual([4, 7, 9, 2, 1, 9, 3]);
  });
  it("returns the difference between the final number and its only other occurrence", () => {
    expect(appendNextNumber([0, 3, 3])).toEqual([0, 3, 3, 1]);
    expect(appendNextNumber([1, 2, 3, 5, 2])).toEqual([1, 2, 3, 5, 2, 3]);
    expect(appendNextNumber([4, 7, 3, 2, 1, 7])).toEqual([4, 7, 3, 2, 1, 7, 4]);
    expect(appendNextNumber([4, 7, 9, 1, 2, 1])).toEqual([4, 7, 9, 1, 2, 1, 2]);
  });
  it("returns the difference between the final number and its last occurrence", () => {
    expect(appendNextNumber([3, 3, 3])).toEqual([3, 3, 3, 1]);
    expect(appendNextNumber([1, 2, 2, 5, 2])).toEqual([1, 2, 2, 5, 2, 2]);
    expect(appendNextNumber([4, 7, 7, 4, 1, 7])).toEqual([4, 7, 7, 4, 1, 7, 3]);
    expect(appendNextNumber([1, 7, 1, 1, 1, 1])).toEqual([1, 7, 1, 1, 1, 1, 1]);
  });
});
