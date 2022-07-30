/**
 * Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

 A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

 0 <= i < j < k < arr.length
 |arr[i] - arr[j]| <= a
 |arr[j] - arr[k]| <= b
 |arr[i] - arr[k]| <= c
 Where |x| denotes the absolute value of x.

 Return the number of good triplets.

 * @param arr
 * @param a
 * @param b
 * @param c
 */
function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
  const arrLength = arr.length;
  let resultedNumber = 0;

  for (let i = 0; i <= (arrLength - 2); i++) {
    const firstElementInTriple = arr[i];

    for (let j = 1 + i; j <= (arrLength - 1); j++) {
      const secondElementInTriple = arr[j];

      if (!(Math.abs(firstElementInTriple - secondElementInTriple) <= a)) {
        continue;
      }

      for (let k = 1+ j; k <= arrLength; k++) {
        const thirdElementInTriple = arr[k];

        if (Math.abs(firstElementInTriple - secondElementInTriple) <= a &&
          Math.abs(secondElementInTriple - thirdElementInTriple) <= b &&
          Math.abs(firstElementInTriple - thirdElementInTriple) <= c) {
          resultedNumber++;
        }
      }
    }

  }

  return resultedNumber;
}
