# variety

A tiny JavaScript library for working with random values

## installation

```bash
yarn add variety
```

## usage

```javascript
import { sampleWeighted } from 'variety';

const items = [['a', 1], ['b', 5]];

const choice = sampleWeighted(
  items,
  myRng // optional prng function, defaults to Math.random
);

console.log(choice); // 'a' | 'b', five times as likely to be 'b'
```

### api

All functions listed below optionally take a pseudorandom number generator of type `PRNG` as their last argument (defaults to Math.random)

#### `rand(min = 0, max = 1): number`

Returns a pseudorandom float between `min` (inclusive) and `max` (exclusive)

#### `randInt(max: number): number`

#### `randInt(min: number, max: number): number`

Returns a pseudorandom float between `min` (inclusive) and `max` (exclusive). If only one number is provided, returns a number between `0` (inclusive) and `max` (exclusive)

#### `sample<T>(items: ArrayLike<T>): T`

Returns a (pseudo)randomly sampled element from the given list

#### `sampleWeighted<T>(items: [T, number][]): T`

#### `sampleWeighted<T>(items: Map<T, number>): T`

Returns a weighted pseudorandom sample from either a list of `[item, weight]` tuples, or a Map object with `item => weight` key value pairs. Weights are relative to all other weights in the collection, and don't need to be normalized.

#### `shuffle<T>(coll: T[]): T[]`

Returns a shuffled (pseudorandomly sorted) permutation of `coll`. Does not modify `coll`.
