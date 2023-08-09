import {numSubseq} from './number-of-subsequences-that-satisfy-the-given-sum-condition';

describe('numSubseq', () => {
    it('should return the number of non-empty subsequences', function () {
        expect(numSubseq([3,5,6,7], 9)).toEqual(4);
        expect(numSubseq([3,3,6,8], 10)).toEqual(6);
        expect(numSubseq([2,3,3,4,6,7], 12)).toEqual(61);
    });
});