import { fibGenerator } from "./generate-fibonacci-sequence";

describe("fibGenerator", () => {
  it("should generate Fibonacci sequence", () => {
    const generator = fibGenerator();

    expect(generator.next().value).toBe(0);
    expect(generator.next().value).toBe(1);
    expect(generator.next().value).toBe(1);
    expect(generator.next().value).toBe(2);
    expect(generator.next().value).toBe(3);
  });

  it("should not be done when iterated indefinitely", () => {
    const generator = fibGenerator();

    for (let i = 0; i < 1000; i++) {
      const { done } = generator.next();
      expect(done).toBe(false);
    }
  });
});
