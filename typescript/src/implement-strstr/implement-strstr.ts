/**
 * Implement strStr().
 *
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 *
 * Clarification:
 *
 * What should we return when needle is an empty string? This is a great question to ask during an interview.
 *
 * For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
 *
 * @param haystack
 * @param needle
 */
export function strStr(haystack: string, needle: string): number {
    const haystackLength = haystack.length;
    const needleLength = needle.length;
    let occurrenceIndex = -1;

    if (needleLength === 0) {
        return 0;
    }

    for (let i = 0; i <= haystack.length; i++) {
        if (haystack.substr(i, needleLength) === needle) {
            occurrenceIndex = i;
            break;
        } else if ((haystackLength - i) === needleLength) {
            break;
        }
    }

    return occurrenceIndex;
}