import { anagramGenerator } from "./anagramGenerator";

describe("anagramGenerator", () => {
  it("returns anagram of one-letter word", () => {
    expect(anagramGenerator("a")).toEqual(["a"]);
  });
  it("returns anagram of two-letter words", () => {
    expect(anagramGenerator("ab")).toMatchObject(["ab", "ba"]);
  });

  it("returns anagram of three-letter words", () => {
    expect(anagramGenerator("abc").sort()).toMatchObject(
      ["abc", "acb", "bac", "bca", "cba", "cab"].sort()
    );
  });

  it("returns anagram of four-letter words", () => {
    expect(anagramGenerator("biro").sort()).toMatchObject(
      [
        "biro",
        "bior",
        "brio",
        "broi",
        "boir",
        "bori",
        "ibro",
        "ibor",
        "irbo",
        "irob",
        "iobr",
        "iorb",
        "rbio",
        "rboi",
        "ribo",
        "riob",
        "roib",
        "robi",
        "obir",
        "obri",
        "oibr",
        "oirb",
        "orbi",
        "orib",
      ].sort()
    );
  });
});
