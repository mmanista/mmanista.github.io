var app = angular.module('mmApp', ['ngRoute', 'ngAnimate'])

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/components'	, { templateUrl: 'templates/pages/components-page.html',	key: "components", 	controller: 'componentsCtrl'})
		.when('/general'	, { templateUrl: 'templates/pages/general-page.html',		key: "general", 	controller: 'generalCtrl'	})
		.when('/pig_game'	, { templateUrl: 'templates/pages/pig-game-page.html',		key: "pig_game",	controller: 'pigGameCtrl'	})
		.otherwise({ redirectTo: '/general'});

	// $locationProvider.html5Mode(true);
}])

.service('timeService'		, ['$interval',		timeService		])

.directive('mmDigitalClock'	, 					mmDigitalClock	)
.directive('mmResize'		, 					mmResize		)
.directive('mmInterestsTree',					mmInterestsTree	)