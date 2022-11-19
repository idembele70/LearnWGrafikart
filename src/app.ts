// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type MyReturnType<F extends Function> = F extends (arg: any) => infer RT
  ? RT
  : never;

type a = MyReturnType<typeof fn>; // should be "1 | 2"
