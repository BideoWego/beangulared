import './style.css';

import angular from 'angular';
import router from '@uirouter/angularjs';

const Beangulared = angular.module('Beangulared', [router]);

Beangulared.config([
  '$urlRouterProvider',
  '$stateProvider',
  function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('game', {
      url: '',
      templateUrl: './templates/game/index.html',
      controller: 'GameCtrl'
    });
  }
]);

Beangulared.controller('GameCtrl', [
  '$scope',
  function($scope) {
    $scope.message = 'Hello, Beangulared!';
  }
]);
