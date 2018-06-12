import { expect } from 'chai';
import { range2d, ranges2d, extract2d } from '../src/lib/grid_utils';

describe('Grid utils', () => {
  describe('#range2d', () => {
    it('returns a 2d range from the source array', () => {
      const range = range2d([
        [0, 1, 2],
        [0, 1, 2],
        [0, 1, 2]
      ], 0, 0, 2, 2);
      expect(range).to.deep.equal([
        [0, 1],
        [0, 1]
      ]);
    });

    it('allows an x and y offset for the range', () => {
      const range = range2d([
        [0, 1, 2],
        [0, 1, 2],
        [1, 2, 3]
      ], 1, 1, 2, 2);
      expect(range).to.deep.equal([
        [1, 2],
        [2, 3]
      ]);
    });
  });
});
