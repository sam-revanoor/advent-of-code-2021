const fs = require("fs");

const input = fs.readFileSync("src/tdd/electionResults/results.txt", "utf-8");

export const electionResults = (input: string) => {
  const electionResultsFile = input.split(/\r?\n/);
  const results = electionResultsFile.map((elRes) =>
    resultsForOneConstituency(elRes)
  );
  return results;
};

export const resultsForOneConstituency = (
  results: string
): { [key: string]: string } => {
  const resultsObj = {};
  const resultsArr = results.split(", ");
  resultsObj["constituency"] = resultsArr.shift();

  let total = 0;
  for (let i = 0; i < resultsArr.length; i += 2) {
    total += parseInt(resultsArr[i]);
  }
  for (let i = 1; i < resultsArr.length; i += 2) {
    resultsObj[convertPartyName(resultsArr[i])] =
      ((parseInt(resultsArr[i - 1]) / total) * 100).toFixed(0) + "%";
  }

  return resultsObj;
};

export const convertPartyName = (partyCode: string) => {
  switch (partyCode) {
    case "C":
      return "Conservative Party";
    case "L":
      return "Labour Party";
    case "UKIP":
      return "UKIP";
    case "LD":
      return "Liberal Democrats";
    case "G":
      return "Green Party";
    case "Ind":
      return "Independent";
    default:
      return "SNP";
  }
};
