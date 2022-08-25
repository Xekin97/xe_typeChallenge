type MyPick<T, U extends keyof T> = {
  [key in U]: T[key];
};
