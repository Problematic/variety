# variety

A tiny JavaScript library for working with random values

## usage

```javascript
import { sampleWeighted } from 'variety';

const items = [[1, 'a'], [5, 'b']];

const choice = sampleWeighted(
  items,
  myRng // optional prng function, defaults to Math.random
);

console.log(choice); // 'a' | 'b'
```

### api

#### `rand(min = 0, max = 1, rng = Math.Random): number`

Returns a pseudorandom float between `min` (inclusive) and `max` (exclusive)

#### `sample<T>(items: T[]): T`

Returns a (pseudo)randomly sampled element from the given list

#### `sampleWeighted<T>(items: [number, T][]): T`

Returns a weighted pseudorandom sample from a list of `[weight, item]` tuples. Weights are relative to all other weights in the collection, and don't need to be normalized.
