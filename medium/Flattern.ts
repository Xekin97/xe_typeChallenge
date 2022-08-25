type Flatten<Arr extends readonly any[]> = Arr extends [infer F, ...infer Rest]
  ? F extends readonly any[]
    ? Flatten<[...F, ...Rest]>
    : [F, ...Flatten<Rest>]
  : [];

type TestFlatten = [1, 2, [3], [[], 6], [[5]], [5], [], [[[[7]]]], 1, 2];

// [1, 2, 3, 6, 5, 5, 7, 1, 2]
type TestFlattenRes = Flatten<TestFlatten>;
