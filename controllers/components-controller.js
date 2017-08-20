app.controller('componentsCtrl', ['$scope', 'timeService', function($scope, timeService) {

	$scope.clockCfg = {
		showSecs	: false
	};

	$scope.timeService = timeService;
	
}]);