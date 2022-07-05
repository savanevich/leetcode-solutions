import {minBitFlips} from './min-bit-flips'
import {optimalMinBitFlips} from './optimal-min-bit-flips'

test('returns the number of minimum flips to equal two numbers', () => {
    expect(minBitFlips(3, 4)).toBe(3);
    expect(optimalMinBitFlips(3, 4)).toBe(3);
    expect(minBitFlips(10, 7)).toBe(3);
    expect(optimalMinBitFlips(10, 7)).toBe(3);
});