type DeepReadonly<T> = {
  readonly [key in keyof T]: T[key] extends Record<any, any>
    ? DeepReadonly<T[key]>
    : T[key];
};
