//service declaration to use in controller for http GET request
myApp.service('getService', function($http){

	var main = this ;

	this.get2016_17 = function (){

		return $http({
					method : "GET",
					url : "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json"

				}) 
	} //end get2016_17

	this.get2015_16 = function (){

		return $http({
					method : "GET",
					url : "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json"

				}) 
	} //end get2015_16 

});//end service