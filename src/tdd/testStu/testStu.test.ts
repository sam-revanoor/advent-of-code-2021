import { getLeafValues } from "./testStu";

describe("testStu", () => {
  //   it("returns true to show file is synced", () => {
  //     expect(getLeafValues()).toBe(true);
  //   });

  //   it("returns values for object with depth = 1", () => {
  //     expect(
  //       getLeafValues({
  //         id: 1,
  //         name: "Stu",
  //       })
  //     ).toEqual([1, "Stu"]);
  //     expect(
  //       getLeafValues({
  //         id: 12,
  //         name: "Katie",
  //       })
  //     ).toEqual([12, "Katie"]);
  //   });
  it("returns values for object with depth = 2", () => {
    expect(
      getLeafValues({
        id: 1,
        profile: { name: "Stu", age: 20 },
        hairColour: "black",
      })
    ).toEqual([1, "Stu", 20, "black"]);
    expect(
      getLeafValues({
        id: 2,
        profile: { name: "Katie", age: 10 },
        hairColour: "brown",
      })
    ).toEqual([2, "Katie", 10, "brown"]);
  });
  it("returns values for object with depth = n", () => {
    expect(
      getLeafValues({
        id: 1,
        name: "Sam",
        pets: [
          { id: "a", name: "Beans" },
          { id: "b", name: "Bananas" },
        ],
      })
    ).toEqual([1, "Sam", "a", "Beans", "b", "Bananas"]);
  });
});
