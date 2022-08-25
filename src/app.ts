// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice

type KebabCase<S extends string, isFirst = true> = S extends `${infer First}${infer Rest}` ?

First extends Uppercase<First> ? isFirst extends true ? First : `-${Lowercase<First>}` : First


type kebab = KebabCase<"FooBarBaz"> // expected foo-bar-baz

