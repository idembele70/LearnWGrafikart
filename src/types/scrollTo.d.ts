declare module "scroll-to" {
  export function scrollTo(
    x: number,
    y: number,
    options: {
      ease?: string;
      duration?: number;
    }
  ): void;
}
