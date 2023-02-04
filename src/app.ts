// type challenges
type Flip<O> =
  {
    [Key in keyof O as `${O[Key] extends string | number | boolean ? O[Key] : never}`]: Key
  }
type a = Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
type b = Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
type c = Flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}
