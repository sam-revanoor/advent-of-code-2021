import { crabSub } from "./crabSub";
import { input } from "./input";

const sampleInput: number[] = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];
describe("crabSub", () => {
  it("returns min amt of fuel for new position", () => {
    expect(crabSub(sampleInput)).toBe(168);
    expect(crabSub(input)).toBe(94813675);
  });
});
