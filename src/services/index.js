import * as board from '../lib/board';


export default app => {
  app.factory('board', () => board);
};
