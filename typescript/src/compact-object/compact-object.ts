/**
 * 2705. Compact Object
 * Medium
 * 107
 * 7
 * Companies
 * Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.
 *
 * You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
 */
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

export function compactObject(obj: Obj): Obj {
  if (obj === null) {
    return null;
  }

  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(v => compactObject(v as Array<JSONValue>));
  }

  if (typeof obj !== "object") {
    return obj;
  }

  const compacted = {};

  for (const key in obj) {
    let value = compactObject(obj[key] as Obj);
    if (Boolean(value)) {
      compacted[key] = value;
    }
  }

  return compacted;
}
