// MyInclude<'a'|'b'|'c', 'c'> => 'c'
type Include<T, U> = T extends U ? T : never;

type MyReadonly2<T, U extends keyof T> = {
  readonly [key in Include<keyof T, U>]: T[key];
} & {
  [key in Exclude<keyof T, U>]: T[key];
};

interface TestReadonly2 {
  a?: number;
  b?: string;
  c: [];
}

type TestReadonly2Res = MyReadonly2<TestReadonly2, "a">;
