import { compactObject } from "./compact-object";

test("Expected to compact the object", () => {
  expect(compactObject([null, 0, false, 1])).toEqual([1]);
  expect(compactObject({"a": null, "b": [false, 1]})).toEqual({"b": [1]});
  expect(compactObject([null, 0, 5, [0], [false, 16]])).toEqual([5, [], [16]]);
});

