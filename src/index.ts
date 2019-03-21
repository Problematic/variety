import { PRNG, WeightedChoice } from './types';

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
function sample<T>(items: ArrayLike<T>, rng?: PRNG): T;

function sample<T>(items: ArrayLike<T>, rng = Math.random): T {
  return items[Math.floor(rng() * items.length)];
}

/** Returns a pseudorandom selection from a list of [item, weight] pairs */
function sampleWeighted<T>(items: WeightedChoice<T>[], rng?: PRNG): T;

/** Returns a pseudorandom selection from a Map of `item => weight` key-value pairs */
function sampleWeighted<T>(items: Map<T, number>, rng?: PRNG): T;

function sampleWeighted<T>(
  items: WeightedChoice<T>[] | Map<T, number>,
  rng = Math.random
): T {
  let choices;

  if (items instanceof Map) {
    choices = Array.from(items.entries());
  } else {
    choices = items;
  }

  const choice = choices.reduce<WeightedChoice<T>>(
    (best, next) => {
      const pair: WeightedChoice<T> = [next[0], rng() ** (1 / next[1])];

      if (!best) {
        return pair;
      } else if (Math.max(best[1], pair[1]) === best[1]) {
        return best;
      } else {
        return pair;
      }
    },
    null as any
  )[0];

  return choice;
}

function shuffle<T>(coll: T[], rng?: PRNG): T[] {
  return coll
    .map((_, idx) => ({ idx, value: rand(rng) }))
    .sort((a, b) => b.value - a.value)
    .map(({ idx }) => coll[idx]);
}

export { rand, sample, sampleWeighted, shuffle };
