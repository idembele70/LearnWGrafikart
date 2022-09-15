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

type ParseSign<S extends string> = S extends `${infer First}${any}`
  ? First extends `${"+" | "-"}`
    ? First
    : ""
  : "";
type ParsePercent<S extends string> = S extends `${any}%` ? "%" : "";
type ParseNumber<S extends string> =
  S extends `${ParseSign<S>}${infer Mid}${ParsePercent<S>}` ? Mid : "";
type PercentageParser<S extends string> = [
  ParseSign<S>,
  ParseNumber<S>,
  ParsePercent<S>
];

type R1 = PercentageParser<PString1>; // expected ['', '', '']
type R2 = PercentageParser<PString2>; // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3>; // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4>; // expected ["", "85", "%"]
type R5 = PercentageParser<PString5>; // expected ["", "85", ""]
