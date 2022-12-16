// type challenges

type Foo = {
  [key: string]: any;
  foo(): void;
};

type RemoveIndexSignature<T> = {
  [Key in keyof T as string extends Key
    ? never
    : number extends Key
    ? never
    : symbol extends Key
    ? never
    : Key]: T[Key];
};

type A = RemoveIndexSignature<Foo>; // expected { foo(): void }
