myApp.controller('displayController', ['$scope', '$http', function($scope, $http){
  console.log("display controller working");
  getHeroes();

  function getHeroes() {
    $http.get('/heroes')
      .then(function (response) {
        console.log('GET /heroes ', response.data);
        var heroData = response.data
        heroData.forEach(function (book) {

        });

        $scope.heroes = heroData;
      });
  }

  $scope.deleteHero = function (id) {
      $http.delete('/heroes/' + id)
        .then(function () {
          console.log('DELETE /heroes/', id);
          getHeroes();
        });
    }






}]);
