type Absolute<T extends number> = `${T}` extends infer V
  ? V extends `${infer O}${infer Rest}`
    ? O extends "-"
      ? Rest
      : V
    : never
  : never;

type TestAbsolute = -1000;

// "1000"
type TestAbsoluteRes = Absolute<TestAbsolute>;
