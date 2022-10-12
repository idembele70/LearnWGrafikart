// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice

type NumberToTuple<T extends number, A extends 4[] = []> = A["length"] extends T
  ? A
  : NumberToTuple<T, [...A, 4]>;

type Plus<T extends number, U extends number> = [
  ...NumberToTuple<T>,
  ...NumberToTuple<U>
]["length"] &
  number;
type Fibonacci<
  N extends number,
  start extends number = 2,
  Current extends number = 1,
  Prev extends number = 0
> = N extends 0 | 1
  ? 1
  : N extends start
  ? Plus<Current, Prev>
  : Fibonacci<N, Plus<start, 1>, Plus<Prev, Current>, Current>;

type Result1 = Fibonacci<3>; // 2
type Result2 = Fibonacci<8>; // 21
