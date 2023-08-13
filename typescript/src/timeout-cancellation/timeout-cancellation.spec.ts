import { cancellable } from "./timeout-cancellation";

describe("cancellable", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it("should call the provided function after the specified time", () => {
    const mockFn = jest.fn();
    const cancelFn = cancellable(mockFn, [], 1000);

    jest.advanceTimersByTime(1000);

    expect(mockFn).toHaveBeenCalledTimes(1);
    cancelFn();
  });

  it("should cancel the execution when cancel function is called", () => {
    const mockFn = jest.fn();
    const cancelFn = cancellable(mockFn, [], 1000);

    cancelFn();

    jest.advanceTimersByTime(1000);

    expect(mockFn).not.toHaveBeenCalled();
  });

  it("should pass the provided arguments to the function", () => {
    const mockFn = jest.fn();
    const args = [1, "test", { key: "value" }];
    const cancelFn = cancellable(mockFn, args, 1000);

    jest.advanceTimersByTime(1000);

    expect(mockFn).toHaveBeenCalledWith(...args);
    cancelFn();
  });
});
