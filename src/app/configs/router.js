import Beangulared from '../beangulared';

/**
 * @module router
 */
export default Beangulared.config([
  '$urlRouterProvider', '$stateProvider',
  ($urlRouterProvider, $stateProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('game', {
      url: '',
      templateUrl: './app/templates/game/index.html',
      controller: 'GameController'
    });
  }
]);
