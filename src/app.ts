// type challenges

type Reverse<A extends any[]> = A extends [infer First, ...infer Rest] ?
  [...Reverse<Rest>, First] : A

type a = Reverse<['a', 'b']> // ['b', 'a']
type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']