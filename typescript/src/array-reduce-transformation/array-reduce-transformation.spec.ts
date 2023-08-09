import { reduce } from "./array-reduce-transformation";

test("Expected to reduce values in array", () => {
  expect(
    reduce(
      [1, 2, 3, 4],
      function sum(accum, curr) {
        return accum + curr;
      },
      0
    )
  ).toEqual(10);
  expect(
    reduce(
      [1, 2, 3, 4],
      function sum(accum, curr) {
        return accum + curr * curr;
      },
      100
    )
  ).toEqual(130);
  expect(
    reduce(
      [],
      function sum(accum, curr) {
        return 0;
      },
      25
    )
  ).toEqual(25);
});
