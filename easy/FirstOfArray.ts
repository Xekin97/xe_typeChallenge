type FirstOfArray<T extends any[]> = T extends [infer A, ...any] ? A : never;
