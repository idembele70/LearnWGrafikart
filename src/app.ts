// Utilitary Types

class FeatureFlags {
  darktheme = () => true;
  lighttheme = () => false;
  nfsw() {
    return "false";
  }
  env = "Hello World";
}

type OptionsFlag<T> = {
  [K in keyof T as T[K] extends () => boolean
    ? `get${Capitalize<K & string>}`
    : never]: T[K];
};
type A = OptionsFlag<FeatureFlags>;
