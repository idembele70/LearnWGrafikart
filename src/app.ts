// type challenges

type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>
// (arg0: boolean, arg1: number, arg2: string) => void
type Reverse<A extends any[]> = A extends [infer First, ...infer Rest] ?
  [...Reverse<Rest>, First] : A
type FlipArguments<F extends Function> =
  F extends (...args: infer Args) => infer R ?
  (...arg: Reverse<Args>) => R : never