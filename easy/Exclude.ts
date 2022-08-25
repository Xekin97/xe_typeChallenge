// MyExclude<'a'|'b'|'c', 'c'> => 'a' | 'b'
type MyExclude<T, U> = T extends U ? never : T;

// MyInclude<'a'|'b'|'c', 'c'> => 'c'
type MyInclude<T, U> = T extends U ? T : never;
