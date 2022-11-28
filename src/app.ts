// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice

type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer Head}${From}${infer Tail}`
  ? `${Head}${To}${Tail}`
  : S;

type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'
type replacedd = Replace<"foobarbar", "bar", "foo">; // expected to be 'types are awesome!'
