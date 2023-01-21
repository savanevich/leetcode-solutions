import 'jest'
import {construct2DArray} from './convert-1d-array-into-2d-array'

test('should construct 2d array', () => {
  expect(construct2DArray([1,2,3,4], 2, 2)).toEqual([[1, 2], [3, 4]]);
  expect(construct2DArray([1,2,3], 1, 3)).toEqual([[1,2,3]]);
  expect(construct2DArray([1,2], 1, 1)).toEqual([]);
  expect(construct2DArray([1,2,3], 2, 1)).toEqual([]);
});
