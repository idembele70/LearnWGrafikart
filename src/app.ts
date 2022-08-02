// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type DontUseAny = PropertyKey | object;

type Last<T extends DontUseAny[]> = [DontUseAny, ...T][T["length"]];

type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1
