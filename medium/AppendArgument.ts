type AppendArgument<T extends (...args: any[]) => any, U> = T extends (
  ...args: infer Arg
) => any
  ? (...args: [...Arg, U]) => ReturnType<T>
  : never;
