// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice

type Trim<S extends string> = S extends `${" "}${infer Middle}${" "}`
  ? Trim<Middle>
  : S;

type trimmed = Trim<"  Hello World  ">; // expected to be 'Hello World'
