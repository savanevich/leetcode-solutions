import { expect as testedExpect } from "./to-be-or-not-to-be";

describe("expect function", () => {
  it("should pass when values are equal", () => {
    expect(testedExpect(5).toBe(5)).toBe(true);
  });

  it("should throw an error when values are not equal", () => {
    expect(() => testedExpect(5).toBe(10)).toThrowError("Not Equal");
  });

  it("should pass when values are not equal", () => {
    expect(testedExpect(5).notToBe(10)).toBe(true);
  });

  it("should throw an error when values are equal", () => {
    expect(() => testedExpect(5).notToBe(5)).toThrowError("Equal");
  });
});
