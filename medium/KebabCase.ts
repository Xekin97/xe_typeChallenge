type isWord<C extends string> = C extends Uppercase<C>
  ? C extends Lowercase<C>
    ? never
    : C
  : C;

type LowercaseFirst<S> = S extends `${infer F}${infer Rest}`
  ? `${Lowercase<F>}${Rest}`
  : S;

type SmallKebabCase<S> = S extends `${infer F}${infer Rest}`
  ? `${F extends isWord<F>
      ? F extends Uppercase<F>
        ? `-${Lowercase<F>}`
        : F
      : F}${SmallKebabCase<Rest>}`
  : S;

type KebabCase<S> = SmallKebabCase<LowercaseFirst<S>>;

type TestKebabCaseA = "FooBarBaz";
type TestKebabCaseB = "do-nothing";

// expected to foo-bar-baz
type TestKebabCaseResA = KebabCase<TestKebabCaseA>;

// expected to do-nothing
type TestKebabCaseResB = KebabCase<TestKebabCaseB>;
