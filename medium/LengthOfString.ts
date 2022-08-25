type StrToArr<S extends string> = S extends `${infer F}${infer Rest}`
  ? [F, ...StrToArr<Rest>]
  : [];

type LengthOfString<S extends string> = StrToArr<S>["length"];

type TestLengthOfString = "lorem";

// 5
type TestLengthOfStringRes = LengthOfString<TestLengthOfString>;
