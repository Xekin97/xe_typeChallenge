type Pop<T extends any[]> = T extends [...infer Rest, infer L] ? Rest : never;
