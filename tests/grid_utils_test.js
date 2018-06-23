import { expect } from 'chai';
import {
  range2d,
  ranges2d,
  eachRange2d,
  extract2d
} from '../src/lib/grid_utils';

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

  describe('#ranges2d', () => {
    it('returns an array of ranges', () => {
      const ranges = ranges2d([
        [0, 1, 2],
        [1, 2, 3],
        [2, 3, 4]
      ], 2, 2);
      expect(ranges).to.deep.equal([
        [ [ 0, 1 ], [ 1, 2 ] ],
        [ [ 1, 2 ], [ 2, 3 ] ],
        [ [ 1, 2 ], [ 2, 3 ] ],
        [ [ 2, 3 ], [ 3, 4 ] ]
      ]);
    });
  });

  describe('#eachRange2d', () => {
    it('calls a function for each range in the source array', () => {
      const params = [];
      eachRange2d([
        [1, 2, 3],
        [3, 4, 5],
        [4, 5, 6]
      ], 2, 2, (range, x, y) => {
        params.push([range, x, y]);
      });
      expect(params).to.deep.equal([
        [[[1, 2], [3, 4]], 0, 0],
        [[[2, 3], [4, 5]], 1, 0],
        [[[3, 4], [4, 5]], 0, 1],
        [[[4, 5], [5, 6]], 1, 1]
      ]);
    });
  });

  describe('#extract2d', () => {
    it('extracts values from a 2d array given a 2d pattern', () => {
      const values = extract2d([
        [ , 1, ],
        [ , 1, ],
        [ , 1, ]
      ], [
        [0, 1, 2],
        [2, 1, 0],
        [1, 2, 3],
        [3, 2, 1]
      ]);
      expect(values).to.deep.equal([1, 1, 2]);
    });
  });
});
