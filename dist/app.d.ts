declare class FeatureFlags {
    darktheme: () => boolean;
    lighttheme: () => boolean;
    nfsw(): string;
    env: string;
}
declare type OptionsFlag<T> = {
    [K in keyof T as T[K] extends () => boolean ? `get${Capitalize<K & string>}` : never]: T[K];
};
declare type A = OptionsFlag<FeatureFlags>;
