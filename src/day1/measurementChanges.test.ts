import {
  measurementChanges,
  windowsMeasurementChanges,
} from "./measurementChanges";
import { input } from "./input";

const sampleInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

describe("measurementChanges", () => {
  it("returns number of 'increased' or 'decreased' if second value is higher or lower than first", () => {
    expect(measurementChanges([200, 201], "increased")).toBe(1);
    expect(measurementChanges([201, 190], "decreased")).toBe(1);
    expect(measurementChanges([200, 191, 201, 190], "decreased")).toBe(2);
    expect(measurementChanges(sampleInput, "increased")).toBe(7);
    expect(measurementChanges(input, "increased")).toBe(1215);
  });
});

describe("windowsMeasurementChanges", () => {
  it("returns number of 'increased' or 'decreased' if second value is higher or lower than first", () => {
    expect(windowsMeasurementChanges(sampleInput, "increased")).toBe(5);
    expect(windowsMeasurementChanges(input, "increased")).toBe(1150);
  });
});

describe("windowsMeasurementChanges", () => {
  it("pops the last value off the array", () => {
    const array = ["hello", "world"];

    const newBlah = doesStuff(array);
    expect(newBlah).toEqual(["hello"]);
  });

  //   it("returns the same array by reference", () => {
  //     const blah = ["hello", "world"];

  //     const newArray = doesStuff([...blah]);

  //     console.log(blah, newArray, blah === newArray);

  //     expect(newArray).toEqual([...blah]);
  //   });

  it("returns the same array by reference", () => {
    const z = {
      a: {
        b: [{ z: [{ numbers: [323, 4, 23] }] }],
      },
    };

    const y = {
      a: {
        b: [{ z: [{ numbers: [323, 4, 23] }] }],
      },
    };

    const a: number[] = [];

    isEqual(a, a);

    expect(z).toEqual(y);
  });
});

function doesStuff(arr: string[]) {
  arr.pop();

  return arr;
}

function isEqual(a: number[], b: number[]) {
  if (a === b) return true;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}
