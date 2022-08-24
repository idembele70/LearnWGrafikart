// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice

type LengthOfString<
  S extends string,
  P extends string[] = []
> = S extends `${infer First}${infer Rest}`
  ? LengthOfString<Rest, [...P, First]>
  : P["length"];

type A = LengthOfString<"kumiko">; // 6
