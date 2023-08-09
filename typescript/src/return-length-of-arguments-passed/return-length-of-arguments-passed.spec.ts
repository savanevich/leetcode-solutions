import { argumentsLength } from "./return-length-of-arguments-passed";

describe("argumentsLength", () => {
  it("should return 0 when no arguments are passed", () => {
    const result = argumentsLength();
    expect(result).toBe(0);
  });

  it("should return the correct number of arguments passed", () => {
    const result1 = argumentsLength(1, 2, 3);
    const result2 = argumentsLength("a", "b", "c", "d", "e");

    expect(result1).toBe(3);
    expect(result2).toBe(5);
  });

  it("should return 1 when a single argument is passed", () => {
    const result = argumentsLength("hello");
    expect(result).toBe(1);
  });

  it("should return the correct number of arguments when various types are passed", () => {
    const result1 = argumentsLength(42, "apple", true, null);
    const result2 = argumentsLength([1, 2, 3], { key: "value" });

    expect(result1).toBe(4);
    expect(result2).toBe(2);
  });

  it("should handle empty objects and arrays as arguments", () => {
    const result1 = argumentsLength([]);
    const result2 = argumentsLength({});
    const result3 = argumentsLength([], {});

    expect(result1).toBe(1);
    expect(result2).toBe(1);
    expect(result3).toBe(2);
  });
});
