// type challenges

type numberToTuple<N extends number, A extends number[] = []> =
  A["length"] extends N ? A : numberToTuple<N, [...A, N]>

type Plus<A extends number, B extends number> =
  [...numberToTuple<A>, numberToTuple<B>]["length"] & number
type Fibonacci<N extends number, Prev extends number = 0, Current extends number = 1> =
  N extends 0 ? 1 :
  Prev extends N ?
  Plus<Prev, Current> :
  Fibonacci<N, Current, Plus<Prev, Current>>
type Result1 = Fibonacci<3> // 2
type Result2 = Fibonacci<8> // 21
