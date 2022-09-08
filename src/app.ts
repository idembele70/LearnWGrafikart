// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice

interface User {
  name?: string;
  age?: number;
  address?: string;
}

type Merge<O> = {
  [Key in keyof O]: O[Key];
};
type MyExclude<T, U> = T extends U ? never : T;
type RequiredByKeys<O, K> = Merge<
  {
    [Key in K as Key extends keyof O ? Key : never]: Key extends keyof O
      ? MyExclude<O[Key], undefined>
      : never;
  } & {
    [Key in Exclude<keyof O, K>]?: O[Key];
  }
>;

type UserRequiredName = RequiredByKeys<User, "name">; // { name: string; age?: number; address?: string }
