var app = angular.module('superCool');

app.controller('mainCtrl', function($scope, mainService){

	$scope.countMeOdds = 'Type something here!';


	$scope.test = mainService.myProperty;

	$scope.mainControllerFunction = function(){	
	
		var result = mainService.countTheOdds($scope.countMeOdds);
		mainService.myProperty = result;
		$scope.countMeOdds = 'You ran the function!';	
	}


	$scope.showServiceVariable = function(){

		console.log(mainService.myProperty);

	}

});
