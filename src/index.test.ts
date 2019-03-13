import { rand, sample, sampleWeighted, WeightedChoice } from './index';

describe('variety', () => {
  let rng: () => number;

  beforeEach(() => {
    rng = jest.fn(() => 0.5);
    Math.random = jest.fn(() => 0.1);
  });

  describe('rand()', () => {
    it('delegates to rng fn when provided', () => {
      expect(rand(rng)).toBe(0.5);
      expect(rand(10, rng)).toBe(5.0);
      expect(rand(2, 5, rng)).toBe(3.5);
      expect(rng).toHaveBeenCalledTimes(3);
    });

    it('delegates to Math.random when no rng fn is provided', () => {
      expect(rand()).toBe(0.1);
      expect(Math.random).toHaveBeenCalled();
    });
  });

  describe('sample()', () => {
    it('delegates to rng fn when provided', () => {
      expect(sample([1, 2, 3, 4, 5], rng)).toBe(3);
      expect(rng).toHaveBeenCalled();
    });

    it('delegates to Math.random when no rng fn is provided', () => {
      expect(sample([1, 2, 3, 4, 5])).toBe(1);
      expect(Math.random).toHaveBeenCalled();
    });
  });

  describe('sampleWeighted()', () => {
    it('accepts a list of item/weight pairs', () => {
      const items: WeightedChoice<string>[] = [['a', 1], ['b', 4]];

      expect(sampleWeighted(items, rng)).toBe('b');
    });

    it('accepts a Map<TItem, number> object', () => {
      const items = new Map([['a', 1], ['b', 4]]);

      expect(sampleWeighted(items, rng)).toBe('b');
    });

    it('delegates to rng fn when provided', () => {
      sampleWeighted([['a', 1]], rng);

      expect(rng).toHaveBeenCalled();
    });

    it('delegates to Math.random when no rng fn is provided', () => {
      const items: WeightedChoice<string>[] = [
        ['a', 0.025],
        ['b', 0.5],
        ['c', 0.3],
      ];

      expect(sampleWeighted(items)).toBe('b');
      expect(Math.random).toHaveBeenCalled();
    });
  });
});
