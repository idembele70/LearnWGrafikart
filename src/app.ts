// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice

type MinusOne<T, A extends any[] = []> = A["length"] extends T
  ? A extends [any, ...infer L]
    ? L["length"]
    : 0
  : MinusOne<T, [...A, 1]>;

type B = MinusOne<12>;
