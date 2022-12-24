// type challenges

type a = StartsWith<"abc", "ac">; // expected to be false
type b = StartsWith<"abc", "ab">; // expected to be true
type c = StartsWith<"abc", "abcd">; // expected to be false

type StartsWith<
  S extends string,
  Start extends string
> = S extends `${Start}${any}` ? true : false;
