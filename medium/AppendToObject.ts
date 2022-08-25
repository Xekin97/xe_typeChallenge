type AppendToObject<T, K extends PropertyKey, V> = {
  [key in keyof T | K]: key extends keyof T ? T[key] : V;
};

type TestAppendToObject = {
  a: 1;
  b: 2;
};
// { a: 1, b: 2, c: 3 }
type TestAppendToObjectRes = AppendToObject<TestAppendToObject, "c", 3>;
