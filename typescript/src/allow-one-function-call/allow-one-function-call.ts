/**
 * 2666. Allow One Function Call
 * https://leetcode.com/problems/allow-one-function-call/
 */
type Fn = (...args: any[]) => any;

export function once(fn: Fn): Fn {
  let hasBeenCalled = false;
  return function (...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      return fn(...args);
    } else {
      return undefined;
    }
  };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
