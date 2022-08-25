type StringToUnion<S> = S extends `${infer F}${infer Rest}`
  ? F | StringToUnion<Rest>
  : never;

type TestStringToUnion = "lorem";

// "l" | "o" | "r" | "e" | "m"
type TestStringToUnionRes = StringToUnion<TestStringToUnion>;
