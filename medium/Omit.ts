type MyOmit<T, U extends keyof T> = {
  [key in Exclude<keyof T, U>]: T[key];
};
