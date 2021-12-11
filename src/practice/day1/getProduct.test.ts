import { getProduct } from "./getProduct";
import { input } from "./input";

describe("2020", () => {
  it("returns product of all items in a 2-item list that sum up to n", () => {
    expect(getProduct([1, 2], 3, 2)).toEqual(2);
    expect(getProduct([4, 2], 6, 2)).toEqual(8);
    expect(getProduct([7, 13], 20, 2)).toEqual(91);
    expect(getProduct([177, 34], 211, 2)).toEqual(6018);
  });
  it("returns product of the 2 items in a multi-item list that sum up to n", () => {
    expect(getProduct([1, 2, 4, 7], 3, 2)).toEqual(2);
    expect(getProduct([4, 0, 17, 2], 6, 2)).toEqual(8);
    expect(getProduct([7, 13, 100, 45, 23, 20], 20, 2)).toEqual(91);
    expect(getProduct([177, 411, 16923, 3, 34], 211, 2)).toEqual(6018);
  });
  it("returns product of the 2 numbers in the list that sum up to 2020", () => {
    expect(getProduct(input, 2020, 2)).toEqual(805731);
  });
  it("returns product of the 3 items in a multi-item list that sum up to 2020", () => {
    expect(getProduct([1721, 979, 366, 299, 675, 1456], 2020, 3)).toEqual(
      241861950
    );
    expect(getProduct(input, 2020, 3)).toEqual(192684960);
  });
});
