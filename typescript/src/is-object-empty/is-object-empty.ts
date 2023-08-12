/**
 * 2727. Is Object Empty
 * https://leetcode.com/problems/is-object-empty/
 */
export function isEmpty(obj: Record<string, any> | any[]): boolean {
  return Object.keys(obj).length === 0;
}
