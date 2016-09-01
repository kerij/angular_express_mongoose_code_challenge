var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/create', {
      templateUrl: '/views/templates/createHero.html',
      controller: "createController"
    })
    .when('/display', {
      templateUrl: '/views/templates/displayHero.html',
      controller: "displayController"
    })
    .otherwise({
      redirectTo: '/create'
    })
}]);
