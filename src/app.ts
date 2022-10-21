// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice

type Chunk<
  A extends any[],
  C extends number = 1,
  L extends any[] = []
> = L["length"] extends C
  ? [L, ...Chunk<A, C>]
  : A extends [infer First, ...infer Rest]
  ? Chunk<Rest, C, [...L, First]>
  : L;
type exp1 = Chunk<[1, 2, 3], 2>; // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4>; // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1>; // expected to be [[1], [2], [3]]
