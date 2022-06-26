declare module "scroll-to" {
  export const scrollTo: (
    x: number,
    y: number,
    options: {
      ease?: string;
      duration?: number;
    }
  ) => void;
  export default scrollTo;
}
