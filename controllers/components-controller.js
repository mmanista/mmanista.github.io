app.controller('componentsCtrl', ['$scope', 'timeService', function($scope, timeService) {

	$scope.clockCfg = {
		showSecs	: false
	};

	$scope.interestsTreeCfg = {
		selectedItems	: [],
		treeName		: "Sports",
		treeData		: {
			title			:"Sports",
			id 				:0,
			children 		:[
				{
					title			:"Individual",
					id 				:1,
					children 		:[
						{
							title			:"Indoor",
							id 				:3,
							children 		:[],
							hiddenChildren 	:[
								{
									title			:"Table tennis",
									id 				:5,
									children 		:[],
									hiddenChildren 	:[]
								},
								{
									title			:"Badminton",
									id 				:20,
									children 		:[],
									hiddenChildren 	:[]
								},
								{
									title			:"Bowling",
									id 				:21,
									children 		:[],
									hiddenChildren 	:[]
								},
								{
									title			:"E-sports",
									id 				:22,
									children 		:[],
									hiddenChildren 	:[]
								},

							]
						},
						{
							title			:"Outdoor",
							id 				:4,
							children 		:[
								{
									title			:"Winter sports",
									id 				:12,
									children 		:[],
									hiddenChildren 	:[
										{
											title			:"Cross country",
											id 				:14,
											children 		:[],
											hiddenChildren 	:[]
										},
										{
											title			:"Biathlon",
											id 				:15,
											children 		:[],
											hiddenChildren 	:[]
										},
										{
											title			:"Alpine skiing",
											id 				:16,
											children 		:[],
											hiddenChildren 	:[]
										},
										{
											title			:"Slopestyle",
											id 				:17,
											children 		:[],
											hiddenChildren 	:[]
										}
									]
								},
								{
									title			:"Others",
									id 				:13,
									children 		:[],
									hiddenChildren 	:[
									{
										title			:"Archery",
										id 				:30,
										children 		:[],
										hiddenChildren 	:[]
									},
									{
										title			:"Athletics",
										id 				:31,
										children 		:[],
										hiddenChildren 	:[]
									},

									]
								}
							],
							hiddenChildren 	:[]
						},
					],
					hiddenChildren 	:[]
				},
				{
					title			:"Team",
					id 				:2,
					children 		:[
						{
							title			:"Sports with a ball",
							id 				:6,
							children 		:[],
							hiddenChildren 	:[
								{
									title			:"Football",
									id 				:8,
									children 		:[],
									hiddenChildren 	:[]
								},
								{
									title			:"Volleyball",
									id 				:9,
									children 		:[],
									hiddenChildren 	:[]
								},
								{
									title			:"Basketball",
									id 				:10,
									children 		:[],
									hiddenChildren 	:[]
								},
								{
									title			:"Handball",
									id 				:11,
									children 		:[],
									hiddenChildren 	:[]
								}
							]
						},
						{
							title			:"Others",
							id 				:7,
							children 		:[],
							hiddenChildren 	:[
								{
									title			:"Rugby",
									id 				:35,
									children 		:[],
									hiddenChildren 	:[]
								},
								{
									title			:"Flying disc",
									id 				:36,
									children 		:[],
									hiddenChildren 	:[]
								},
								{
									title			:"Cricket",
									id 				:37,
									children 		:[],
									hiddenChildren 	:[]
								},
							]
						},
					],
					hiddenChildren 	:[]
				},

			],
			hiddenChildren 	:[]
		}
				
	};

	$scope.timeService = timeService;
	
}]);