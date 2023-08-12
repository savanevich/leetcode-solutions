/**
 * 2704. To Be Or Not To Be
 * https://leetcode.com/problems/to-be-or-not-to-be/
 */
type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

export function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (expectedValue: any) => {
      if (val === expectedValue) {
        return true;
      } else {
        throw Error("Not Equal");
      }
    },
    notToBe: (expectedValue: any): any => {
      if (val !== expectedValue) {
        return true;
      } else {
        throw Error("Equal");
      }
    },
  };
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
