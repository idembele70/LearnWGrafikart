// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice

// expected to be string

type Result = Push<[1, 2], "3">; // [1, 2, '3']

type Push<A extends any[], T> = [...A, T];
