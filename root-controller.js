app.controller('rootController', ['$scope', '$location', function($scope, $location) {
	$scope.cfg = {
		activeTab : 'general'
	};

	console.log($location.url());

	$scope.menuClass = function(page) {
	    var current = $location.path().substring(1);
	    return page === current ? "active-tab" : "";
  	};
	$scope.menus = [
		{
			name: "General",
			id	: 0,
			link: "general"
		},
		{
			name: "My components",
			id	: 1,
			link: "components"
		},
		{
			name: "Let's play!",
			id	: 2,
			link: "pig_game"
		},
		{
			name: "Contact",
			id	: 3,
			link: "contact"
		},
		{
			name: "Barcelona",
			id	: 4,
			link: "barca_map"
		},
	];

	$scope.author = {
		name	: "Maciej",
		surname	: "Manista",
		title	: "Front-end Developer"
	};

}]);