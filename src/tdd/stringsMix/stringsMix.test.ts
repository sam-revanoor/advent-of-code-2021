import { stringsMix } from "./stringsMix";

describe("stringsMix", () => {
  // iteration 1
  // it("returns true to show fn is connected", () => {
  //   expect(stringsMix()).toBe(true);
  // });

  // iteration 2
  it("returns an empty string if both strings have equal lowercase values", () => {
    // iteration 3
    expect(stringsMix("hey", "hey")).toEqual("");
    expect(stringsMix("HhEeYy", "HEYhey")).toEqual("");
  });
  it("returns repetition info for both strings", () => {
    // iteration 4
    // expect(stringsMix("heel", "good")).toEqual({
    //   s1: { h: 1, e: 2, l: 1 },
    //   s2: { g: 1, o: 2, d: 1 },
    // });
    // expect(stringsMix("puppy", "kittennnn")).toEqual({
    //   s1: { p: 3, u: 1, y: 1 },
    //   s2: { k: 1, i: 1, t: 2, e: 1, n: 4 },
    // });
    // iteration 5
    // expect(stringsMix("hello", "goodbye")).toEqual({
    //   s1: { l: 2 },
    //   s2: { o: 2 },
    // });
    // expect(stringsMix("puppy", "kittennnn")).toEqual({
    //   s1: { p: 3 },
    //   s2: { t: 2, n: 4 },
    // });
  });
  it("returns repetition string for both strings", () => {
    // iteration 6
    // expect(stringsMix("heel", "good")).toEqual({
    //   s1: { h: 1, e: 2, l: 1 },
    //   s2: { g: 1, o: 2, d: 1 },
    // });
    // expect(stringsMix("puppy", "kittennnn")).toEqual({
    //   s1: { p: 3, u: 1, y: 1 },
    //   s2: { k: 1, i: 1, t: 2, e: 1, n: 4 },
    // });

    // iteration 7
    // expect(stringsMix("heel", "goodee")).toEqual({
    //   s1: { e: 2 },
    //   s2: { e: 2, o: 2 },
    // });
    // expect(stringsMix("puppy", "kittennnn")).toEqual({
    //   s1: { p: 3 },
    //   s2: { n: 4, t: 2 },
    // });

    // iteration 8
    expect(stringsMix("hello", "goodbye")).toEqual("1:ll/2:oo");
    expect(stringsMix("puppy", "kittennnn")).toEqual("2:nnnn/1:ppp/2:tt");
  });
});
