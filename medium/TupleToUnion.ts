// [1, 2, 3] => 1 | 2 | 3
type TupleToUnion<T extends any[]> = T extends (infer V)[] ? V : never;

type TestTupleToUnion = [1, 2, 3];

type TestTupleToUnionResult = TupleToUnion<TestTupleToUnion>;
