import {arrayRankTransform, fastArrayRankTransform} from './rank-transform-of-an-array'

test('returns the ranks of the numbers', () => {
    expect(arrayRankTransform([40,10,20,30])).toEqual([4,1,2,3]);
    expect(arrayRankTransform([100,100,100])).toEqual([1,1,1]);
    expect(arrayRankTransform([37,12,28,9,100,56,80,5,12])).toEqual([5,3,4,2,8,6,7,1,3]);

    expect(fastArrayRankTransform([37,12,28,9,100,56,80,5,12])).toEqual([5,3,4,2,8,6,7,1,3]);
});