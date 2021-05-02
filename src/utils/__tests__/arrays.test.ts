import { subtractArrayFromArray } from "../arrays";

describe("WHEN testing arrays", () => {
  describe("WHEN given subtractArrayFromArray", () => {
    const inputsAndExpected: {
      a: number[];
      b: number[];
      result: number[];
    }[] = [
      { a: [1, 2, 3], b: [4], result: [1, 2, 3] },
      { a: [1, 2, 3], b: [1, 2, 3], result: [] },
      { a: [1, 2, 3], b: [2], result: [1, 3] },
    ];

    for (const { a, b, result } of inputsAndExpected) {
      describe(`WHEN given ${a} and ${b}`, () => {
        it(`SHOULD be ${result}`, () => {
          expect(subtractArrayFromArray(a, b)).toEqual(result);
        });
      });
    }
  });
});
