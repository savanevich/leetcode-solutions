/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * @param strs
 */
export function longestCommonPrefix(strs: string[]): string {
    let accumulator = '';

    for (let i = 0; i <= strs[0].length; i++) {
        if (!strs.every((element) => element[i] === strs[0][i])) {
            break;
        } else {
            accumulator += (strs[0][i] || '');
        }
    }

    return accumulator;
}