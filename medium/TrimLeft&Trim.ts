type TrimLeft<S> = S extends ` ${infer T}` ? TrimLeft<T> : S;

type TrimRight<S> = S extends `${infer T} ` ? TrimRight<T> : S;

type Trim<S> = TrimRight<TrimLeft<S>>;
