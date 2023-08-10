import { merge } from "./merge-sorted-array";

describe("merge", () => {
  it("should merge two arrays when nums1 is empty", () => {
    const nums1 = [];
    const m = 0;
    const nums2 = [1, 2, 3];
    const n = 3;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1, 2, 3]);
  });

  it("should merge when nums2 is empty", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [];
    const n = 0;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1, 2, 3, 0, 0, 0]);
  });

  it("should merge when nums1 and nums2 have alternating elements", () => {
    const nums1 = [2, 4, 6, 0, 0, 0];
    const m = 3;
    const nums2 = [1, 3, 5];
    const n = 3;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should merge when nums1 and nums2 have equal elements", () => {
    const nums1 = [1, 1, 1, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 2, 2];
    const n = 3;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1, 1, 1, 2, 2, 2]);
  });
});
