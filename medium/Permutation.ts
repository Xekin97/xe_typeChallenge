type Permutation<T, U = T> = [T] extends [never]
  ? []
  : U extends T
  ? [U, ...Permutation<Exclude<T, U>>]
  : never;

type TestPermutation = "a" | "b" | "c";

// ["a", "b", "c"] | ["a", "c", "b"] ... 4 kinds
type TestPermutionRes = Permutation<TestPermutation>;
