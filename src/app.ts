// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice

type foo = {
  name: string;
  age: string;
};
type coo = {
  age: number;
  sex: string;
};

type Merge<O, O1> = {
  [Key in keyof (O & O1)]: Key extends keyof O1
    ? O1[Key]
    : Key extends keyof O
    ? O[Key]
    : never;
};

type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}
