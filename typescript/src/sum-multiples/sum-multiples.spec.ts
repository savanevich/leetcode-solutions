import {sumOfMultiples} from "./sum-multiples";

test("Expected to correctly sum multiples", () => {
  expect(sumOfMultiples(7)).toEqual(21);
  expect(sumOfMultiples(10)).toEqual(40);
  expect(sumOfMultiples(9)).toEqual(30);
});

