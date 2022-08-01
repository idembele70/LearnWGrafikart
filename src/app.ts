// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice
type arr1 = ["a", "b", "c", "d"];
type arr2 = [3, 2, 1];

type Pop<T extends any[]> = T extends [...infer TPop, PropertyKey]
  ? TPop
  : never;

type re1 = Pop<arr1>; // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2>; // expected to be [3, 2]
