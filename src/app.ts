// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice

type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};
type DeepReadonly<T> = keyof T extends never
  ? T
  : {
      readonly [Key in keyof T]: DeepReadonly<T[Key]>;
    };

type Todo = DeepReadonly<X>; // should be same as `Expected`
