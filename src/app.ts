// type challenges

type a = EndsWith<"abc", "bc">; // expected to be true
type b = EndsWith<"abc", "abc">; // expected to be true
type c = EndsWith<"abc", "d">; // expected to be false

type EndsWith<S extends string, End extends string> = S extends `${any}${End}`
  ? true
  : false;
