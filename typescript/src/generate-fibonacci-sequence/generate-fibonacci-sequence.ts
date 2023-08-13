/**
 * 2648. Generate Fibonacci Sequence
 * https://leetcode.com/problems/generate-fibonacci-sequence/
 */
export function* fibGenerator(): Generator<number, any, number> {
  let prev = 0;
  let curr = 1;
  while (true) {
    yield prev;
    [prev, curr] = [curr, prev + curr];
  }
}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
