// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type MyExclude<T, U> = T extends U ? never : T;
type MyOmit<T, U extends keyof T> = {
  [Key in MyExclude<keyof T, U>]: T[Key];
};
type MyPick<T, U extends keyof T> = {
  [Key in keyof T as Key extends U ? Key : never]: T[Key];
};
type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<MyPick<T, K>> &
  MyOmit<T, K>;

const todo: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
todo.completed = true; // OK
