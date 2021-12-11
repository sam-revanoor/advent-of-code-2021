import { validPasswords } from "./validPasswords";
import { input } from "./input";

describe("validPasswords", () => {
  it("find # of occurrences of value in password", () => {
    expect(validPasswords([{ "1-3 a": "abcde" }])).toEqual(1);
    expect(validPasswords([{ "1-3 b": "cdefg" }])).toEqual(0);
    expect(validPasswords([{ "2-9 c": "ccccccccc" }])).toEqual(0);
    expect(
      validPasswords([
        { "1-3 a": "abcde" },
        { "1-3 b": "cdefg" },
        { "2-9 c": "ccccccccc" },
      ])
    ).toEqual(1);
    expect(validPasswords(input)).toEqual(729);
  });
});
