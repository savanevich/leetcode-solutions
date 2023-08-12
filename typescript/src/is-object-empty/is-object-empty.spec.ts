import { isEmpty } from "./is-object-empty";

test("Expected to check whether passed object is empty", () => {
  expect(isEmpty({ x: 5, y: 42 })).toEqual(false);
  expect(isEmpty({})).toEqual(true);
});
