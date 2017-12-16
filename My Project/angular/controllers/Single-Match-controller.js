myApp.controller('singleMatchController',['getService','$routeParams',function(getService,$routeParams){

var main=this;
this.date=$routeParams.date;
this.team1=angular.fromJson($routeParams.team1);
this.team2=angular.fromJson($routeParams.team2);
this.score1=$routeParams.score1;
this.score2=$routeParams.score2;

console.log(main.date);
console.log(main.team1.name);
console.log(main.team2.name);
console.log(main.score1);
console.log(main.score2);


}])//end controller