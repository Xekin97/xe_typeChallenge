type MyParameters<T> = T extends (...args: infer K) => any ? K : never;
