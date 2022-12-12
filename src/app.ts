// type challenges

type IsUnion<T, C = T> = [T] extends [never]
  ? false
  : T extends C
  ? [C] extends [T]
    ? false
    : true
  : false;

type case1 = IsUnion<string>; // false
type case2 = IsUnion<string | number>; // true
type case3 = IsUnion<[string | number]>; // false
