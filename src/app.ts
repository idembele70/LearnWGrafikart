// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice

type Arr = ["1", "2", "3"];

type TupleToUnion<T extends (PropertyKey | boolean)[]> = T[number];

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
