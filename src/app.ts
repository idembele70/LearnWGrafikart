// Utilitary Types

class Feaures {
  darkmode = () => true;
  lightmode = () => false;
  nfsw = () => false;
  env = "Hello World";
}

type AZ<T> = {
  [K in keyof T as T[K] extends () => boolean ? K : never]: T[K];
};

type B = AZ<Feaures>;
