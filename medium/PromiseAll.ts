type MaybePromise<T> = Promise<T> | T;

type MaybePromiseValue<T extends MaybePromise<unknown>> = T extends Promise<
  infer V
>
  ? V
  : T;

type MaybePromiseValueArr<T extends readonly MaybePromise<unknown>[]> =
  T extends readonly [infer F, ...infer Rest]
    ? T extends [F]
      ? [MaybePromiseValue<F>]
      : [MaybePromiseValue<F>, ...MaybePromiseValueArr<Rest>]
    : never;

type PromiseAll = <T extends readonly MaybePromise<unknown>[]>(
  promises: T
) => Promise<MaybePromiseValueArr<T>>;

const TestPromiseAllCaseA = 1 as const;
const TestPromiseAllCaseB = Promise.resolve(2 as const);
const TestPromiseAllCaseC = new Promise<5>((res) => setTimeout(res, 1000, 5));

const promiseAll: PromiseAll = {} as any;
// Promise<[1, 2, 5]>
const TestPromiseAllRes = (promiseAll as PromiseAll)([
  TestPromiseAllCaseA,
  TestPromiseAllCaseB,
  TestPromiseAllCaseC,
] as const);
