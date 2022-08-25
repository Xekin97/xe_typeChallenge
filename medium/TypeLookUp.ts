type HasValue<T, V> = V extends T[keyof T] ? T : never;

type LookUp<U, T> = U extends HasValue<U, T> ? U : never;

interface TestLookUpA {
  typeA: "number";
  typeB: "string";
  a: 123;
  b: "abc";
}

interface TestLookUpB {
  typeA: "array";
  typeB: "obj";
  a: [123];
  b: Record<any, any>;
}

// TestLookUpA
type a = LookUp<TestLookUpA | TestLookUpB, "number">;

// TestLookUpB
type b = LookUp<TestLookUpA | TestLookUpB, "obj">;
