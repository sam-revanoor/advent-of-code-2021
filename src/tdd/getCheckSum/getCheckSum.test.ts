import {
  checkBoxIds,
  countIdsWithThreeLettersRepeated,
  countIdsWithTwoLettersRepeated,
  getCheckSum,
  productOfBoxIdsWithRepetitions,
} from "./getCheckSum";
import { input } from "./input";

describe("checkBoxIds", () => {
  it("returns repetition info for box ID", () => {
    expect(getCheckSum("abcdef")).toEqual({
      letterRepeatsTwice: false,
      letterRepeatsThrice: false,
    });
    expect(getCheckSum("abcdee")).toEqual({
      letterRepeatsTwice: true,
      letterRepeatsThrice: false,
    });
    expect(getCheckSum("abceee")).toEqual({
      letterRepeatsTwice: false,
      letterRepeatsThrice: true,
    });
  });

  it("returns array of repetitions for array of boxIds", () => {
    expect(
      checkBoxIds([
        "abcdef",
        "bababc",
        "abbcde",
        "abcccd",
        "aabcdd",
        "abcdee",
        "ababab",
      ])
    ).toEqual([
      { letterRepeatsTwice: false, letterRepeatsThrice: false },
      { letterRepeatsTwice: true, letterRepeatsThrice: true },
      { letterRepeatsTwice: true, letterRepeatsThrice: false },
      { letterRepeatsTwice: false, letterRepeatsThrice: true },
      { letterRepeatsTwice: true, letterRepeatsThrice: false },
      { letterRepeatsTwice: true, letterRepeatsThrice: false },
      { letterRepeatsTwice: false, letterRepeatsThrice: true },
    ]);
  });

  it("returns number of repetitions that have two letters repeated", () => {
    expect(
      countIdsWithTwoLettersRepeated([
        { letterRepeatsTwice: false, letterRepeatsThrice: false },
        { letterRepeatsTwice: true, letterRepeatsThrice: true },
        { letterRepeatsTwice: true, letterRepeatsThrice: false },
        { letterRepeatsTwice: false, letterRepeatsThrice: true },
        { letterRepeatsTwice: true, letterRepeatsThrice: false },
        { letterRepeatsTwice: true, letterRepeatsThrice: false },
        { letterRepeatsTwice: false, letterRepeatsThrice: true },
      ])
    ).toEqual(4);
  });

  it("returns number of repetitions that have three letters repeated", () => {
    expect(
      countIdsWithThreeLettersRepeated([
        { letterRepeatsTwice: false, letterRepeatsThrice: false },
        { letterRepeatsTwice: true, letterRepeatsThrice: true },
        { letterRepeatsTwice: true, letterRepeatsThrice: false },
        { letterRepeatsTwice: false, letterRepeatsThrice: true },
        { letterRepeatsTwice: true, letterRepeatsThrice: false },
        { letterRepeatsTwice: true, letterRepeatsThrice: false },
        { letterRepeatsTwice: false, letterRepeatsThrice: true },
      ])
    ).toEqual(3);
  });

  it("returns product of repetitions for given boxIDs", () => {
    expect(
      productOfBoxIdsWithRepetitions([
        "abcdef",
        "bababc",
        "abbcde",
        "abcccd",
        "aabcdd",
        "abcdee",
        "ababab",
      ])
    ).toEqual(12);
    expect(productOfBoxIdsWithRepetitions(input)).toEqual(6474);
  });
});
