// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice

type NumberToTuple<T extends number, A extends 1[] = []> = A["length"] extends T
  ? A
  : NumberToTuple<T, [...A, 1]>;

type Plus<T extends number, U extends number> = [
  ...NumberToTuple<T>,
  ...NumberToTuple<U>
]["length"] &
  number;

type MinusOne<T extends number> = NumberToTuple<T> extends [any, ...infer Rest]
  ? Rest["length"]
  : 0;

type GreatherOrEqual<T extends number, U extends number> = T extends U
  ? true
  : T extends 0
  ? false
  : U extends 0
  ? true
  : GreatherOrEqual<MinusOne<T>, MinusOne<U>>;

type Greater<T extends number, U extends number> = T extends 0
  ? false
  : U extends 0
  ? true
  : Greater<MinusOne<T>, MinusOne<U>>;

type A = GreatherOrEqual<1, 1>;

type Fill<
  T extends any[],
  N,
  Start extends number = 0,
  End extends number = T["length"],
  Idx extends number = 0
> = GreatherOrEqual<Start, End> extends true
  ? T
  : T extends [infer First, ...infer Rest]
  ? GreatherOrEqual<Idx, Start> extends true
    ? Greater<End, Idx> extends true
      ? [N, ...Fill<Rest, N, Start, End, Plus<Idx, 1>>]
      : [First, ...Fill<Rest, N, Start, End, Plus<Idx, 1>>]
    : [First, ...Fill<Rest, N, Start, End, Plus<Idx, 1>>]
  : [];

type exp = Fill<[1, 2, 3], true, 1, 3>; // expected to be [1, true, true]
