declare class Theme {
    darkmode: () => boolean;
    lightmode: () => boolean;
    nfsw: () => boolean;
    env: string;
}
declare type keepItUp<T> = {
    [k in keyof T as T[k] extends () => boolean ? k : never]: T[k];
};
declare type A = keepItUp<Theme>;
