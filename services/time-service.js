var timeService = function($interval) {
	var Service = {
		currentTime	: moment()
	};
	$interval(function() {
		Service.currentTime = moment();
	}, 200);

	return Service;
}