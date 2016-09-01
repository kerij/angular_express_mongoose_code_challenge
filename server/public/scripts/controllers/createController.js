myApp.controller("createController", ["$scope", "$http", function($scope, $http) {
  console.log("createController working")


  $scope.abilityOptions = [
    {name: "Flight", value: "flight"},
    {name: "Super Speed", value: "speed"},
    {name: "Heat Vision", value: "heat_vision"},
    {name: "Super Strength", value: "strength"},
    {name: "Accelerated Healing", value: "healing"},
    {name: "Power Blast", value: "power"},
    {name: "Animal Affinity", value: "animal"}];

  $scope.submitNewHero = function () {
    var data = $scope.newHero
    console.log(data.power.value);
    data.power_name = data.power.value;
    delete data.power;
    console.log(data);
    $http.post('/heroes', data)
      .then(function () {
        console.log('POST /heroes ', data)
        // getHeroes();
      });
  }


}]);
