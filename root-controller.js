app.controller('rootController', ['$scope', function($scope) {
	
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
		}
	];

	$scope.author = {
		name	: "Maciej",
		surname	: "Manista",
		title	: "Front-end Developer"
	};

}]);