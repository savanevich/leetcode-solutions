import {longestSubstring} from './longest-substring-with-at-least-k-repeating-characters'

test('returns the longest substring length where at least k repeating characters', () => {
    expect(longestSubstring('baaabcb', 3)).toBe(3);
    expect(longestSubstring('aaabb', 3)).toBe(3);
    expect(longestSubstring('ababbc', 2)).toBe(5);
    expect(longestSubstring('a', 1)).toBe(1);
});