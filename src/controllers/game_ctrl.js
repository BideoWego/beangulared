
export default [
  '$scope', 'board',
  function($scope, board) {
    $scope.appName = 'Beangulared';
    $scope.board = board.build();
    $scope.colors = [
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'purple',
      'silver'
    ];
  }
];
