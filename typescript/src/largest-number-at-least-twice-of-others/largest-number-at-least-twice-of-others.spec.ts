import {dominantIndex} from './largest-number-at-least-twice-of-others'

test('Returns the index of the largest number if it is at lease twice as much as every other number', () => {
    expect(dominantIndex([3,6,1,0])).toEqual(1);
    expect(dominantIndex([1,2,3,4])).toEqual(-1);
});