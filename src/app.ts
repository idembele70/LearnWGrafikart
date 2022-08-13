// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice
type Falsy = 0 | false | [] | "";
type IsTrue<T> = T extends Falsy ? false : keyof T extends never ? false : true;

type AnyOf<T extends readonly any[]> = T extends [infer First, ...infer Rest]
  ? IsTrue<First> extends true
    ? true
    : AnyOf<Rest>
  : false;

type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.
