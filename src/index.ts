export type PRNG = () => number;

/** Returns a pseudorandom float between 0 (inclusive) and 1 (exclusive) */
function rand(rng?: PRNG): number;

/** Returns a pseudorandom float between 0 (inclusive) and max (exclusive) */
function rand(max: number, rng?: PRNG): number;

/** Returns a pseudorandom float between min (inclusive) and max(exclusive) */
function rand(min: number, max: number, rng?: PRNG): number;

function rand(
  min: number | PRNG = 0,
  max: number | PRNG = 1,
  rng: PRNG = Math.random
): number {
  if (typeof min === 'function') {
    rng = min;
    min = 0;
  }

  if (typeof max === 'function') {
    rng = max;

    if (min) {
      max = min;
      min = 0;
    } else {
      max = 1;
    }
  }

  if (min >= max) {
    max = min;
    min = 0;
  }

  return rng() * (max - min) + min;
}

/** Returns a (pseudo)randomly sampled element from the given list */
function sample<T>(items: T[], rng?: PRNG): T;

function sample<T>(items: T[], rng = Math.random): T {
  return items[Math.floor(rng() * items.length)];
}

export interface WeightedChoice<T> extends Array<number | T> {
  0: number;
  1: T;
}

/** Returns a pseudorandom selection from a list of [weight, element] pairs */
function sampleWeighted<T>(items: WeightedChoice<T>[], rng?: PRNG): T;

function sampleWeighted<T>(items: WeightedChoice<T>[], rng = Math.random): T {
  const totalWeight = items.reduce((acc, [weight]) => acc + weight, 0);
  const targetWeight = rand(totalWeight, rng);

  let acc = 0;

  for (let [weight, value] of items) {
    acc += weight;
    if (targetWeight <= acc) {
      return value;
    }
  }

  return items[items.length - 1][1];
}

export { rand, sample, sampleWeighted };
