type Replace<
  S extends string,
  U extends string,
  V extends string
> = U extends ""
  ? S
  : S extends `${infer F}${U}${infer B}`
  ? `${F}${V}${B}`
  : S;

type ReplaceAll<
  S extends string,
  U extends string,
  V extends string
> = S extends Replace<S, U, V> ? S : ReplaceAll<Replace<S, U, V>, U, V>;

type TestReplace = "hello world!";

type TestReplaceAll = "hello world! hello type!";

// hey world!
type TestReplaceRes = Replace<TestReplace, "hello", "hey">;

// hey world! hey type!
type TestReplaceAllRes = ReplaceAll<TestReplaceAll, "hello", "hey">;
