/**
 * 395. Longest Substring with At Least K Repeating Characters
 * Medium
 * Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.
 *
 * Example 1:
 *
 * Input: s = "aaabb", k = 3
 * Output: 3
 * Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.
 * Example 2:
 *
 * Input: s = "ababbc", k = 2
 * Output: 5
 * Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
 *
 *
 * Constraints:
 *
 * 1 <= s.length <= 104
 * s consists of only lowercase English letters.
 * 1 <= k <= 105
 *
 * https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/Figures/395/divide_and_conquer.png
 */
type letterAmountMap = {
    [letter: string]: number
}

export function longestSubstring(s: string, k: number): number {
    return longestSubstringUtil(s, 0, s.length, k);
}

function longestSubstringUtil(s: string, start: number, end: number, k: number) {
    // If the string length is less than k, there is no way to fulfil the condition
    if (end < k) {
        return 0;
    }

    // Create a map with amounts of all presented letters in the string
    const lettersAmount: letterAmountMap = s
        .substring(start, end)
        .split('')
        .reduce((acc, v) => ({
            ...acc,
            [v]: acc[v] ? ++acc[v] : 1
        }), {});


    for (let i = start; i < end; i++) {
        const currentLetterAmount = lettersAmount[s[i]];

        // If the letter is presented in a string more than k,
        // we are moving to the next one
        if (currentLetterAmount >= k) {
            continue;
        }

        let midNext = i + 1;

        // midNext should contain the end of substring
        // where the next occurrence of the letter
        // with amount less than k
        while (midNext < end && lettersAmount[s[midNext]] < k) {
            midNext++;
        }

        // As we know, the invalid character cannot be part of the result,
        // we split the string at the index where we find the invalid character,
        // recursively check for each split, and combine the result.
        return Math.max(longestSubstringUtil(s, start, i, k), longestSubstringUtil(s, midNext, end, k));
    }

    return (end - start);
}