type isEmpty<T> = T extends number
  ? T extends 0
    ? true
    : false
  : T extends string
  ? T extends ""
    ? true
    : false
  : T extends boolean
  ? T extends false
    ? true
    : false
  : T extends any[]
  ? T extends []
    ? true
    : false
  : T extends Record<PropertyKey, any>
  ? [keyof T] extends [never]
    ? true
    : false
  : never;

type AnyOf<T extends readonly any[]> = T extends []
  ? false
  : T extends [infer F, ...infer Rest]
  ? isEmpty<F> extends true
    ? AnyOf<Rest>
    : true
  : never;

type TestAnyOfCaseA = [0, "", false, [], {}];
type TestAnyOfCaseB = [1, "", false, [], {}];
type TestAnyOfCaseC = [0, "a", false, [], {}];
type TestAnyOfCaseD = [0, "", true, [], {}];
type TestAnyOfCaseE = [0, "", false, [1], {}];
type TestAnyOfCaseF = [0, "", false, [], { a: 1 }];

type TestAnyOfCaseResA = AnyOf<TestAnyOfCaseA>; // expected to false
type TestAnyOfCaseResB = AnyOf<TestAnyOfCaseB>; // expected to true
type TestAnyOfCaseResC = AnyOf<TestAnyOfCaseC>; // expected to true
type TestAnyOfCaseResD = AnyOf<TestAnyOfCaseD>; // expected to true
type TestAnyOfCaseResE = AnyOf<TestAnyOfCaseE>; // expected to true
type TestAnyOfCaseResF = AnyOf<TestAnyOfCaseF>; // expected to true
