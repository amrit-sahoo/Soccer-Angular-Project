myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/all-matches-view.html',
        	// Which controller it should use 
            controller 		: 'allMatchesController',
            // what is the alias of that controller.
        	controllerAs 	: 'allMatches'
        })
        .when('/stats',{
        	templateUrl     : 'views/statistics-view.html',
        	controller 		: 'statsController',
        	controllerAs 	: 'teamStats'
        })
        .when('/single/:date/:team1/:team2/:score1/:score2',{
            templateUrl     : 'views/single-match-view.html',
            controller      : 'singleMatchController',
            controllerAs    : 'match'
        })
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<div style="min-height:340px"><h1 style="margin-top:50px;"><center>Error 404 : Page not found</center></h1></div>'
            }
        );
}]);