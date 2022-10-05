// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ObjectEntries<O> = {
  [Key in keyof O]: [Key, O[Key] extends infer R | undefined ? R : O[Key]];
}[keyof O];

type modelEntries = ObjectEntries<Model>; // ['name', string] | ['age', number] | ['locations', string[] | null];
type modelEntriess = ObjectEntries<{ key?: undefined }>; // ['name', string] | ['age', number] | ['locations', string[] | null];
type modelEntriesss = ObjectEntries<Partial<Model>>; // ['name', string] | ['age', number] | ['locations', string[] | null];
