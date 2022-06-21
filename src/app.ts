// Utilitary Types
class Theme {
  darkmode = () => true;
  lightmode = () => false;
  nfsw = () => false;
  env = "Hello World";
}

type keepItUp<T> = {
  [k in keyof T as T[k] extends () => boolean ? k : never]: T[k];
};

type A = keepItUp<Theme>;
