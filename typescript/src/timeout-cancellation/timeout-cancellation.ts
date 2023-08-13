/**
 *
 */
export function cancellable(fn: Function, args: any[], t: number): Function {
  const timeout = setTimeout(() => fn(...args), t);

  const cancelFn = () => clearTimeout(timeout);

  return cancelFn;
}
