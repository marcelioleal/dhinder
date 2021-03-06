angular.module('dhinder.controllers', ['ionic', 'dhinder.services'])

.controller('DiscoverController', function($scope, $timeout, User) {

  $scope.congressMen = [
      {
        "name": "Edmilson Rodrigues",
        "tagline": "Partido: PSOL, Estado: PA",
        "discussion_url": "https://www.producthunt.com/tech/linkedin-profinder-2",
        "thumbnail": "https://api.url2png.com/v6/P5329C1FA0ECB6/77fdeb2d4df2c4813d5c61384b22a33f/png/?thumbnail_max_width=850&url=https%3A%2F%2Fgoo.gl%2F1jUSIw",
        "product_url": "https://www.producthunt.com/r/0109266759e0f0/40894?app_id=1948"
      },
      {
        "name": "Chico Alencar",
        "tagline": "Partido: PSOL, Estado: RJ",
        "discussion_url": "https://www.producthunt.com/tech/linkedin-profinder-2",
        "thumbnail": "https://api.url2png.com/v6/P5329C1FA0ECB6/77fdeb2d4df2c4813d5c61384b22a33f/png/?thumbnail_max_width=850&url=https%3A%2F%2Fgoo.gl%2F1jUSIw",
        "product_url": "https://www.producthunt.com/r/0109266759e0f0/40894?app_id=1948"
      },
      {
        "name": "Ulisses Guimaraes",
        "tagline": "Partido: PMDB, Estado: RJ",
        "discussion_url": "https://www.producthunt.com/tech/linkedin-profinder-2",
        "thumbnail": "https://api.url2png.com/v6/P5329C1FA0ECB6/77fdeb2d4df2c4813d5c61384b22a33f/png/?thumbnail_max_width=850&url=https%3A%2F%2Fgoo.gl%2F1jUSIw",
        "product_url": "https://www.producthunt.com/r/0109266759e0f0/40894?app_id=1948"
      },
      {
        "name": "Lula",
        "tagline": "Partido: PT, Estado: SP",
        "discussion_url": "https://www.producthunt.com/tech/linkedin-profinder-2",
        "thumbnail": "https://api.url2png.com/v6/P5329C1FA0ECB6/77fdeb2d4df2c4813d5c61384b22a33f/png/?thumbnail_max_width=850&url=https%3A%2F%2Fgoo.gl%2F1jUSIw",
        "product_url": "https://www.producthunt.com/r/0109266759e0f0/40894?app_id=1948"
      }
  ];

  $scope.congressMan = angular.copy($scope.congressMen[0]);

  $scope.sendFeedback = function(bool) {

    if(bool) User.addToFavorites($scope.congressMan);

    $scope.congressMan.rated = bool;
    $scope.congressMan.hide = true;

    $timeout(function () {
      var randomIndex = Math.round(Math.random() * ($scope.congressMen.length - 1));

      $scope.congressMan = angular.copy($scope.congressMen[randomIndex]);
    }, 250);
  }

})

.controller('FavoritesController', function($scope, User) {
  $scope.favorites = User.favorites;

  $scope.removeCongressMan = function(congressMan, index) {
    User.removeFromFavorites(congressMan, index);
  }
})

.controller('TabsController', function($scope) {})
