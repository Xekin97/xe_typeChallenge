type Merge<T, S> = {
  [key in keyof T | keyof S]: key extends keyof S
    ? S[key]
    : key extends keyof T
    ? T[key]
    : never;
};
