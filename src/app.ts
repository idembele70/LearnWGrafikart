// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice

type StrToUnion<S extends string> = S extends `${infer First}${infer Rest}`
  ? First | StrToUnion<Rest>
  : S;

type UniqueCombination<T, C = T> = [T] extends [never]
  ? ""
  : C extends string
  ? `${C extends string ? C | "" : ""}${UniqueCombination<Exclude<T, C>>}`
  : "";

type AllCombinations<S extends string> = UniqueCombination<StrToUnion<S>>;

type AllCombinations_ABC = AllCombinations<"ABC">;
// should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'
