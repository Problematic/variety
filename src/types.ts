export type PRNG = () => number;

export interface WeightedChoice<T> extends Array<number | T> {
  0: T;
  1: number;
}
