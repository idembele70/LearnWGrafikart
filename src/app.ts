// type challenges

type TupleToNestedObject<A extends any[], T> =
  A extends [infer First, ...infer Rest] ?
  {
    [key in `${First & string}`]: Rest["length"] extends 0 ? T : TupleToNestedObject<Rest, T>
  } : T

type a = TupleToNestedObject<['a'], string> // {a: string}
type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type