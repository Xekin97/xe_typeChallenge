type IsUnion<T, U = T> = U extends T
  ? Exclude<T, U> extends never
    ? false
    : true
  : never;

type TestIsUnionCaseA = IsUnion<string>; // false
type TestIsUnionCaseB = IsUnion<string | number>; // true
type TestIsUnionCaseC = IsUnion<[string | number]>; // false
