// type challenges

interface Todo {
  readonly title: string
  readonly description: string
  readonly completed: boolean
}

type Mutable<O extends object> = {
  -readonly [Key in keyof O]: O[Key]
}

type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }
