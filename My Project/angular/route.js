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
        .when('/match/:id1/:id2/:date',{
            templateUrl     : 'views/match-view.html',
            controller      : 'singleMatchController',
            controllerAs    : 'match'
        })
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1 style="margin-top:50px;"><center>Error 404 : Page not found</center></h1>'
            }
        );
}]);