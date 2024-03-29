import { flat } from "./flatten-deeply-nested-array";

test("Expected to flat the array til provided depth", () => {
  expect(
    flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0)
  ).toEqual([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]);
  expect(
    flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)
  ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]);
  expect(
    flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2)
  ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
});
