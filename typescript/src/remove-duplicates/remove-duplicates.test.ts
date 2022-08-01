import 'jest'
import {removeDuplicates} from './remove-duplicates'

test('removes duplicates and returns the amount of unique numbers', () => {
    const nums = [0,0,1,1,1,2,2,3,3,4];
    const uniqueNumsResult = [0,1,2,3,4];

    expect(removeDuplicates(nums)).toBe(5);
    // The condition says it does not matter what you leave beyond the first k elements
    expect(nums.splice(0, uniqueNumsResult.length)).toEqual(uniqueNumsResult)
});