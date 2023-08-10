/**
 * 2722. Join Two Arrays by ID
 * https://leetcode.com/problems/join-two-arrays-by-id/
 */
export function join(arr1: any[], arr2: any[]): any[] {
  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }

  function mergeObjects(val1: any, val2: any): any {
    if (!val1) {
      return val2;
    }

    if (!val2) {
      return val1;
    }

    const uniqueKeys = [...Object.keys(val1), ...Object.keys(val2)].filter(
      onlyUnique
    );

    return uniqueKeys.reduce(
      (acc, value) => ({
        ...acc,
        [value]: value in val2 ? val2[value] : val1[value],
      }),
      {}
    );
  }

  const result = [];

  const keys = [...arr1.map((v) => v.id), ...arr2.map((v) => v.id)]
    .filter(onlyUnique)
    .sort((a, b) => a - b);

  keys.map((key) => {
    const objFromFirst = arr1.find((v) => v.id === key);
    const objFromSecond = arr2.find((v) => v.id === key);

    result.push(mergeObjects(objFromFirst, objFromSecond));
  });

  return result;
}

export function optimizedJoin(arr1: any[], arr2: any[]): any[] {
  const result = {};
  const arrs = [...arr1, ...arr2];

  for (let i = 0; i < arrs.length; i++) {
    result[arrs[i].id] = {
      ...result[arrs[i].id],
      ...arrs[i],
    };
  }

  return Object.values(result);
}
