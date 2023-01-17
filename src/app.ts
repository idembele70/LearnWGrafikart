// type challenges

type MinusOne<N extends number, A extends any[] = []> =
  A["length"] extends N ?
  A extends [any, ...infer Rest] ? Rest & number : 0 : MinusOne<N, [...A, N]>

type FlattenDepth<A extends any[], Count extends number = 1> =
  Count extends 1 ? Flatten<A> :
  Flatten<A> extends A ? A :
  FlattenDepth<Flatten<A>, MinusOne<Count>>
type Flatten<A extends any[]> =
  A extends [infer First, ...infer Rest] ?
  First extends any[] ? [...First, ...Flatten<Rest>] :
  [First, ...Flatten<Rest>] : A

type C = Flatten<[1, 2, [3, 4], [[[5]]]]>
type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1