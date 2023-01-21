import {numOfPairs} from './number-of-pairs-of-strings-with-concatenation-equal-to-target';

describe('numOfPairs', () => {
  it('should return the number of pairs of strings with concatenation equal to target', () => {
    expect(numOfPairs(["777","7","77","77"], "7777")).toEqual(4);
    expect(numOfPairs(["123","4","12","34"], "1234")).toEqual(2);
    expect(numOfPairs(["1","1","1"], "11")).toEqual(6);
  });
});
