import 'jest'
import {countGoodTriplets} from './count-triplets'

test('counts good triplets', () => {
  expect(countGoodTriplets([3,0,1,1,9,7], 7, 2, 3)).toBe(4);
  expect(countGoodTriplets([1,1,2,2,3], 0, 0, 1)).toBe(4);
});
