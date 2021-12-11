import { finalAnswer } from "./powerConsumptionCalculator";
import { input } from "./input";

const sampleInput = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
];

describe("powerConsumptionCalculator", () => {
  it("returns gamma rate for a list of binary values", () => {
    expect(finalAnswer(sampleInput)).toBe(230);
    expect(finalAnswer(input)).toBe(1032597);
  });
});

// loop through binaries, find most common value for first position
// filter binaries to only show those that start with most common digits
// loop through filtered binaries, find most common val
// until filteredBinaries.length === 1
