var mmDigitalClock = function($timeout, $window) {
	return {
		restrict	: 'E',
        templateUrl : 'templates/directives/mm-digital-clock.html',
        scope		: {
        	mmShowSeconds		: '=?',
        	mmBackgroundPreview : '=?'
        },
        controller	: ['$scope', '$interval', '$element', '$timeout', function ($scope, $interval, $element, $timeout) {
        
        	$scope.timer = {
        			secs	: null,
        			mins	: null,
        			hours	: null,
        			day		: null,
        			month	: null,
        			year	: null
        	};
        	$scope.clockTick = function() {
        		$scope.date = moment().locale('en');
        		$scope.timer = {
        				secs	: $scope.date.format('ss'),
        				mins	: $scope.date.format('mm'),
        				hours	: $scope.date.format('kk'),
        				day		: $scope.date.format('Do'),
        				dayName	: $scope.date.format('dddd'),
        				month	: $scope.date.format('MMMM'),
        				year	: $scope.date.format('YYYY')
        		};
    		};
//    		first execution
    		$scope.clockTick();

            // $scope.sizeValue = 300;
    		$scope.$watchCollection(function() {
    			return [$element[0].getBoundingClientRect().width, $element[0].getBoundingClientRect().height]
    		}, function(newVal, oldVal) {
    			$scope.sizeValue = newVal[0] > newVal[1] ? newVal[1] : newVal[0];
    			if($scope.sizeValue < 50) $scope.sizeValue = 50;
    		});
        	
        	$interval($scope.clockTick, 1000);
        }]
	}
}
        