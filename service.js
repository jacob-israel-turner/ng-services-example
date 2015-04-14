var app = angular.module('superCool');

/*
app.service('mainService', function($http){

	this.myProperty = 'this is a property';
	this.someOtherProp = [1,2,3,4];


	this.countTheOdds = function(str){	
		str = str.split('');
		var odds = 0;
		for(var i = 0; i < str.length; i++){
			if(Number(str[i]) % 2 === 1){
				odds++;
			}
		}
		return odds;
	};

});
*/


app.factory('mainService', function($http){

	var objectToReturn = {

		myProperty: 'this is a property',
		someOtherProp: [1,2,3,4],
		countTheOdds: function(str){	
			str = str.split('');
			var odds = 0;
			for(var i = 0; i < str.length; i++){
				if(Number(str[i]) % 2 === 1){
					odds++;
				}
			}
			return odds;
		}
	};
	return objectToReturn;
});

// http://www.google.com/url?q=http%3A%2F%2Ftylermcginnis.com%2Fangularjs-factory-vs-service-vs-provider%2F&sa=D&sntz=1&usg=AFQjCNEwNsM5tLyzzgmIRtWs-fjqsqAJrQ
