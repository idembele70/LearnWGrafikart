// type challenges

type Result = Shift<[3, 2, 1]> // [2, 1]
type Shift<A extends any[]> = A extends [any, ...infer Rest] ? Rest : A