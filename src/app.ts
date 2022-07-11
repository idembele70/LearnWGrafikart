// type challenges
const foo = (arg1: string, arg2: number): void => {};
type MyParameters<T extends Function> = T extends (
  ...args: infer ArgT
) => unknown
  ? ArgT
  : [];
type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
