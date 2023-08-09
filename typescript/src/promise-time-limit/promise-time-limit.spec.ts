import { timeLimit } from "./promise-time-limit";

describe("timeLimit", () => {
  it("should resolve with the result of the function within the time limit", async () => {
    const testFn = async (x: number, y: number) => {
      return x + y;
    };

    const timedTestFn = timeLimit(testFn, 1000);
    const result = await timedTestFn(2, 3);

    expect(result).toEqual(5);
  });

  it('should reject with "Time Limit Exceed" if the function takes longer than the time limit', async () => {
    const testFn = async (n) => {
      await new Promise((res) => setTimeout(res, 100));
      return n * n;
    };

    const timedTestFn = timeLimit(testFn, 5);

    await expect(timedTestFn(50)).rejects.toEqual("Time Limit Exceeded");
  });

  it("should pass function arguments correctly", async () => {
    const testFn = async (...args: number[]) => {
      return args.reduce((sum, val) => sum + val, 0);
    };

    const timedTestFn = timeLimit(testFn, 1000);
    const result = await timedTestFn(1, 2, 3, 4, 5);

    expect(result).toEqual(15);
  });
});
