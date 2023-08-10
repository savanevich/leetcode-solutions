import { optimizedJoin, join } from "./join-two-arrays-by-id";

describe("join", () => {
  it("should correctly join two arrays with unique IDs", () => {
    const arr1 = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const arr2 = [
      { id: 3, name: "Charlie" },
      { id: 4, name: "David" },
    ];

    const result = join(arr1, arr2);

    expect(result).toEqual([...arr1, ...arr2]);
  });

  it("should correctly join arrays with duplicate IDs", () => {
    const arr1 = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const arr2 = [
      { id: 2, age: 30 },
      { id: 3, name: "Charlie" },
    ];

    const result = join(arr1, arr2);

    expect(result).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob", age: 30 },
      { id: 3, name: "Charlie" },
    ]);
  });

  it("should return an empty array when both input arrays are empty", () => {
    const arr1: any[] = [];
    const arr2: any[] = [];

    const result = join(arr1, arr2);

    expect(result).toEqual([]);
  });

  it("should correctly handle an empty first array", () => {
    const arr1: any[] = [];
    const arr2 = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];

    const result = join(arr1, arr2);

    expect(result).toEqual([...arr2]);
  });

  it("should correctly handle an empty second array", () => {
    const arr1 = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const arr2: any[] = [];

    const result = join(arr1, arr2);

    expect(result).toEqual([...arr1]);
  });
});

describe("optimizedJoin", () => {
  it("should correctly join two arrays with unique IDs", () => {
    const arr1 = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const arr2 = [
      { id: 3, name: "Charlie" },
      { id: 4, name: "David" },
    ];

    const result = optimizedJoin(arr1, arr2);

    expect(result).toEqual([...arr1, ...arr2]);
  });

  it("should correctly join arrays with duplicate IDs", () => {
    const arr1 = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const arr2 = [
      { id: 2, age: 30 },
      { id: 3, name: "Charlie" },
    ];

    const result = optimizedJoin(arr1, arr2);

    expect(result).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob", age: 30 },
      { id: 3, name: "Charlie" },
    ]);
  });

  it("should return an empty array when both input arrays are empty", () => {
    const arr1: any[] = [];
    const arr2: any[] = [];

    const result = optimizedJoin(arr1, arr2);

    expect(result).toEqual([]);
  });

  it("should correctly handle an empty first array", () => {
    const arr1: any[] = [];
    const arr2 = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];

    const result = optimizedJoin(arr1, arr2);

    expect(result).toEqual([...arr2]);
  });

  it("should correctly handle an empty second array", () => {
    const arr1 = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const arr2: any[] = [];

    const result = optimizedJoin(arr1, arr2);

    expect(result).toEqual([...arr1]);
  });
});
