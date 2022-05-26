import {
  electionResults,
  convertPartyName,
  resultsForOneConstituency,
} from "./electionResults";
const fs = require("fs");

const testInput = fs.readFileSync(
  "src/tdd/electionResults/testResults.txt",
  "utf-8"
);

const input = fs.readFileSync("src/tdd/electionResults/results.txt", "utf-8");

describe("electionResults", () => {
  //   it("returns true to show files are synced", () => {
  //     expect(electionResults()).toBe(true);
  //   });
  //   it("returns the constituencies from the election results", () => {
  //     expect(electionResults(testInput)).toStrictEqual(["Sam", "Ivan"]);
  //   });

  it("returns the full name for each party from the election results", () => {
    expect(electionResults(testInput)).toStrictEqual([
      {
        constituency: "Sam",
        "Conservative Party": "20%",
        "Labour Party": "10%",
        UKIP: "7%",
        "Liberal Democrats": "63%",
      },
      {
        constituency: "Ivan",
        "Labour Party": "90%",
        "Conservative Party": "1%",
        "Liberal Democrats": "2%",
        UKIP: "4%",
        "Green Party": "1%",
        Independent: "2%",
      },
    ]);
    expect(electionResults(input)).toStrictEqual([
      {
        constituency: "Cardiff West",
        "Conservative Party": "31%",
        "Labour Party": "50%",
        UKIP: "14%",
        "Liberal Democrats": "6%",
      },
      {
        constituency: "Islington South & Finsbury",
        "Labour Party": "51%",
        "Conservative Party": "21%",
        "Liberal Democrats": "11%",
        UKIP: "8%",
        "Green Party": "8%",
        Independent: "1%",
      },
    ]);
  });
});

describe("convertPartyName", () => {
  it("converts party name according to legend", () => {
    expect(convertPartyName("C")).toBe("Conservative Party");
    expect(convertPartyName("UKIP")).toBe("UKIP");
  });
});

describe("resultsForOneConstituency", () => {
  //   it("returns share of votes for one constituency with 1 vote for each", () => {
  //     expect(
  //       resultsForOneConstituency("Sam, 20, C, 10, L, 7, UKIP, 53, LD")
  //     ).toStrictEqual({
  //       constituency: "Sam",
  //       "Conservative Party": 1,
  //       "Labour Party": 1,
  //       UKIP: 1,
  //       "Liberal Democrats": 1,
  //     });
  //     expect(
  //       resultsForOneConstituency(
  //         "Ivan, 90, L, 1, C, 2, LD, 4, UKIP, 1, G, 2, Ind"
  //       )
  //     ).toStrictEqual({
  //       constituency: "Ivan",
  //       "Conservative Party": 1,
  //       "Labour Party": 1,
  //       UKIP: 1,
  //       "Liberal Democrats": 1,
  //       "Green Party": 1,
  //       Independent: 1,
  //     });
  //   });
  it("returns share of votes for one constituency", () => {
    expect(
      resultsForOneConstituency("Sam, 20, C, 10, L, 7, UKIP, 63, LD")
    ).toStrictEqual({
      constituency: "Sam",
      "Conservative Party": "20%",
      "Labour Party": "10%",
      UKIP: "7%",
      "Liberal Democrats": "63%",
    });
    expect(
      resultsForOneConstituency(
        "Ivan, 90, L, 1, C, 2, LD, 4, UKIP, 1, G, 2, Ind"
      )
    ).toStrictEqual({
      constituency: "Ivan",
      "Conservative Party": "1%",
      "Labour Party": "90%",
      UKIP: "4%",
      "Liberal Democrats": "2%",
      "Green Party": "1%",
      Independent: "2%",
    });
  });
});
