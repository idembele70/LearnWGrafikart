// type challenges
type Equal<T, U> = <V>() => (V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;
type Expect<T extends true> = T;

// Exercice

type PString1 = "";
type PString2 = "+85%";
type PString3 = "-85%";
type PString4 = "85%";
type PString5 = "85";

type PlusorMinus = "-" | "+";
type PercentageParser<S extends string> = S extends `${infer Head}${infer Rest}`
  ? Head extends PlusorMinus
    ? [Head, ...(Rest extends `${infer Firsts}%` ? [Firsts, "%"] : [Rest, ""])]
    : ["", ...(S extends `${infer Firsts}%` ? [Firsts, "%"] : [S, ""])]
  : ["", "", ""];

type R1 = PercentageParser<PString1>; // expected ['', '', '']
type R2 = PercentageParser<PString2>; // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3>; // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4>; // expected ["", "85", "%"]
type R5 = PercentageParser<PString5>; // expected ["", "85", ""]
