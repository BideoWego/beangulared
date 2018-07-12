
export default [
  '$urlRouterProvider', '$stateProvider',
  ($urlRouterProvider, $stateProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('game', {
      url: '',
      templateUrl: './templates/game/index.html',
      controller: 'GameCtrl'
    });
  }
];
