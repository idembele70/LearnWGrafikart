// type challenges

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type RemoveUndefinedIfNeed<T, K extends keyof T> = T[K] extends infer R | undefined ? R : T

type ObjectEntries<O> = {
  [Key in keyof O]-?: [Key, RemoveUndefinedIfNeed<O, Key>]
}[keyof O]

type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
type A = ObjectEntries<Partial<Model>>