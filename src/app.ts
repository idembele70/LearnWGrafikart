// type challenges

interface User {
  name: string;
  age: number;
  address: string;
}
type RemoveUndefined<T, K extends keyof T = keyof T> = T[K] extends infer R | undefined ? R : T[K]
type PartialByKeys<O, K extends string> = {
  [Key in keyof O as Key extends K ? Key : never]?: RemoveUndefined<O, Key>;
} & {
    [Key in keyof O as Key extends K ? never : Key]: O[Key];
  };


type UserPartialName = PartialByKeys<User, "name">; // { name?:string; age:number; address:string }

type UserPartialNamee = PartialByKeys<User, "name" | "unknown">; // { name?:string; age:number; address:string }
