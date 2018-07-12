import { expect } from 'chai';
import * as range2d from '../src/lib/range2d';


describe('range2d', () => {
  describe('#one', () => {
    it('returns a 2d range from the source array', () => {
      const range = range2d.one([
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
      const range = range2d.one([
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

  describe('#all', () => {
    it('returns an array of ranges', () => {
      const ranges = range2d.all([
        [0, 1, 2],
        [1, 2, 3],
        [2, 3, 4]
      ], 2, 2);
      expect(ranges).to.deep.equal([
        [[0, 1], [1, 2]],
        [[1, 2], [2, 3]],
        [[1, 2], [2, 3]],
        [[2, 3], [3, 4]]
      ]);
    });
  });

  describe('#each', () => {
    it('calls a function for each range in the source array', () => {
      const params = [];
      range2d.each([
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

  describe('#extract', () => {
    it('extracts values from a 2d array given a 2d pattern', () => {
      const values = range2d.extract([
        [, 1,],
        [, 1,],
        [, 1,]
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
