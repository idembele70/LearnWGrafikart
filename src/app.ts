// type challenges

type OnlyBoolean = PickByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>; // { isReadonly: boolean; isEnable: boolean; }

type PickByType<O, T> = {
  [Key in keyof O as O[Key] extends T ? Key : never]: O[Key];
};
