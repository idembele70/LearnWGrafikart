declare type MyExclude<T, U> = T extends U ? never : T;
declare type B = MyExclude<"a" | "b", "a">;
