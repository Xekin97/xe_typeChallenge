type Includes<T extends any[], K extends string> = K extends T[number]
  ? true
  : false;
