type MyCapitalize<S> = S extends `${infer F}${infer Rest}`
  ? `${Uppercase<F>}${Rest}`
  : never;

type TestCapitalize = "hello world!";

type TestCapitalizeRes = MyCapitalize<TestCapitalize>;
