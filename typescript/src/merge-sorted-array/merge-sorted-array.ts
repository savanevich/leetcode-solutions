/**
 * 88. Merge Sorted Array
 * https://leetcode.com/problems/merge-sorted-array/
 */
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let arrLength = m + n;
  m--;
  n--;

  while (arrLength--) {
    if (n < 0 || nums1[m] > nums2[n]) {
      nums1[arrLength] = nums1[m--];
    } else {
      nums1[arrLength] = nums2[n--];
    }
  }
}
