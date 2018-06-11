import { expect } from 'chai';
import { iterate2d } from '../src/lib/grid';

xdescribe('Grid functions', () => {
  describe('#iterate2d', () => {
    it('returns all iterations of a 2d array', () => {
      const iterations = iterate2d([
        [0, 1, 2],
        [1, 2, 3],
        [2, 3, 4]
      ], 3, 2);
      expect(iterations).to.equal(null);
    });
  });
});
