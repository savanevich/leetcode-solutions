import { once } from "./allow-one-function-call";

describe("once", () => {
  it("should only call the function once", () => {
    let count = 0;
    const increment = once(() => {
      count++;
    });

    increment();
    increment();
    increment();

    expect(count).toBe(1);
  });

  it("should return the correct result of the function", () => {
    const add = once((a, b) => a + b);

    const result1 = add(2, 3);
    const result2 = add(4, 5);

    expect(result1).toBe(5);
    expect(result2).toBe(undefined);
  });

  it("should return undefined after the first call", () => {
    const logOnce = once((message) => console.log(message));

    const result1 = logOnce("Hello");
    const result2 = logOnce("World");

    expect(result1).toBe(undefined);
    expect(result2).toBe(undefined);
  });
});
