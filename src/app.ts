// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice

type FlattenOnce<T> = T extends [infer Head, ...infer Tail]
  ? Head extends unknown[]
    ? [...Head, ...FlattenOnce<Tail>]
    : [Head, ...FlattenOnce<Tail>]
  : [];

type FlattenDepth<
  T extends any[],
  N extends number = 1,
  Count extends any[] = []
> = Count["length"] extends N
  ? T
  : FlattenOnce<T> extends T
  ? T
  : FlattenDepth<FlattenOnce<T>, N, [...Count, 1]>;

type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>; // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
type c = FlattenDepth<[1, 2, 3, 4]>;
