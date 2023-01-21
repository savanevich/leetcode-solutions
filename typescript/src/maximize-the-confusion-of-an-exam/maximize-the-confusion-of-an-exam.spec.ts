import {maxConsecutiveAnswers} from './maximize-the-confusion-of-an-exam';

describe('maxConsecutiveAnswers', () => {
  it('should return a maximum number of consecutive "T" or "F" in the answer key ' +
    'after performing the operation at most k times', function () {
    expect(maxConsecutiveAnswers("TTFF", 2)).toEqual(4);
    expect(maxConsecutiveAnswers("TFFT", 1)).toEqual(3);
    expect(maxConsecutiveAnswers("TTFTTFTT", 1)).toEqual(5);
    expect(maxConsecutiveAnswers("TFFFFF", 1)).toEqual(6);
  });
})
