import 'jest'
import {arrayStringsAreEqual} from './check-if-two-string-arrays-are-equivalent'

test('should construct 2d array', () => {
  expect(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])).toBeTruthy()
  expect(arrayStringsAreEqual(["a", "cb"], ["ab", "c"])).toBeFalsy();
  expect(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])).toBeTruthy();
});
