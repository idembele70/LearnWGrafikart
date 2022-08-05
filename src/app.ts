// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice

type Test = "123";
type StringToUnion<S extends string> = S extends `${infer Head}${infer Tail}`
  ? Head | StringToUnion<Tail>
  : never;

type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
