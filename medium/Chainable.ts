interface Chainable<V = unknown> {
  option: <K extends string, T extends unknown>(
    key: K,
    value: T
  ) => Chainable<{ [key in K]: T } & V>;
  get: () => V;
}

const TestChainable: Chainable = {} as any;

const TestChainableRes = TestChainable.option("a", 1)
  .option("b", 2)
  .option("c", { abc: [1, 2, 3] as const })
  .get();
