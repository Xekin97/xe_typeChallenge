type Diff<T, S> = {
  [key in Exclude<keyof (T & S), keyof (T | S)>]: key extends keyof T
    ? T[key]
    : key extends keyof S
    ? S[key]
    : never;
};

type TestDiffA = {
  a: string;
  b: number;
};

type TestDiffB = {
  a: string;
  c: boolean;
};

type TestDiffResA = Diff<TestDiffA, TestDiffB>; // { b: number, c: boolean }
type TestDiffResB = Diff<TestDiffB, TestDiffA>; // { b: number, c: boolean }
