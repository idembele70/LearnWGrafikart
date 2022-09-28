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
type RequiredByKeys<O, K> = Merge<
  {
    [Key in keyof O as Key extends K ? Key : never]-?: O[Key];
  } & {
    [Key in keyof O as Key extends K ? never : Key]: O[Key];
  }
>;

type UserRequiredName = RequiredByKeys<User, "name">; // { name: string; age?: number; address?: string }
