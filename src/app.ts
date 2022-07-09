// type challenges
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type MyPick<T extends Record<string, any>, K extends string> = {
  [key in K]: T[key];
};

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
