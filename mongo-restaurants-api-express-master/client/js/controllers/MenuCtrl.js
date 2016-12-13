angular.module('myControllers')
	.controller('MenuCtrl', function ($scope, $location, DataService ) {

	  DataService.getBoroughs()
	    .then( boroughs => $scope.boroughs = boroughs )

	  DataService.getCuisines()
	    .then( cuisines => $scope.cuisines = cuisines )

	  $scope.getByCuisine = function(cuisine) {
	    $location.path('/cuisines/' + cuisine );
	  }

	});

