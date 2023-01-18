// type challenges

/* type MinusOne<N extends number, A extends any[] = []> =
  A["length"] extends N ?
  A extends [any, ...infer Rest] ? Rest["length"] : 0 : MinusOne<N, [...A, N]> */

type FlattenDepth<A extends any[], Count extends number = 1, idx extends any[] = []> =
  A extends Flatten<A> ? A :
  Count extends idx["length"] ? A :
  FlattenDepth<Flatten<A>, Count, [0, ...idx]>
type Flatten<A extends any[]> =
  A extends [infer First, ...infer Rest] ?
  First extends any[] ? [...First, ...Flatten<Rest>] :
  [First, ...Flatten<Rest>] : A



type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
type c = FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817> // [1, 2, 3, 4, 5]
type d = FlattenDepth<[1, [2, [3, [4, [5]]]]], 4> // [1, 2, 3, 4, 5]