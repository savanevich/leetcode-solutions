import { map } from "./apply-transform-over-each-element-in-array";

test("Expected map values in array correctly", () => {
  expect(
    map([1, 2, 3], function plusone(n) {
      return n + 1;
    })
  ).toEqual([2, 3, 4]);
  expect(
    map([1, 2, 3], function plusI(n, i) {
      return n + i;
    })
  ).toEqual([1, 3, 5]);
  expect(
    map([10, 20, 30], function constant(n, i) {
      return 42;
    })
  ).toEqual([42, 42, 42]);
});
