/**
 * 2635. Apply Transform Over Each Element in Array
 *
 * source: https://leetcode.com/problems/apply-transform-over-each-element-in-array/
 */
export function map(
  arr: number[],
  fn: (n: number, i: number) => number
): number[] {
  let mappedArr = [];

  for (let i = 0; i < arr.length; i++) {
    mappedArr.push(fn(arr[i], i));
  }

  return mappedArr;
}
