import 'jest'
import {removeElement} from './remove-elements'

test('removes provided number from an array and returns the amount of left elements', () => {
  const nums = [0,1,2,2,3,0,4,2];
  const elementToRemove = 2;
  const afterRemoving = [0,1,3,0,4];

  expect(removeElement(nums, elementToRemove)).toBe(5);
  // The condition says it does not matter what you leave beyond the first k elements
  expect(nums.splice(0, afterRemoving.length)).toEqual(afterRemoving)
});
