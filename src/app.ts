//  Utiliatry types
class Theme {
  darkMode = () => {
    return true;
  };
  lightMode = () => {
    return false;
  };
  nfsw = () => {
    return "nfsw";
  };
  env = "Hello World";
}

type myType<T> = {
  [key in keyof T as T[key] extends () => boolean ? key : never]: T[key];
};

type A = myType<Theme>;
