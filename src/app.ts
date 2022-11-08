// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice

// expected to be string
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<O, U> = {
  [Key in keyof O as Key extends U ? Key : never]: O[Key];
};

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
