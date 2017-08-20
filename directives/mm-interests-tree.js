var mmInterestsTree = function() {
	 return {
	    restrict: 'AE',
	    templateUrl: 'templates/directives/interests-tree/root-element.html',
	    scope: {
	        mmTreeName  			: '=?',
	        mmSourceData  			: '=?',
	        mmSelectedItems			: '=?',
	        mmAlreadySelectedItems	: '=?'
	    },
	    controller: ['$scope', '$timeout', function($scope, $timeout) {
	    	
	    	
	    	// $scope.psAlreadySelectedItems = [5555, 12, 436, 260];
	    	// $scope.mockData = JSON.parse('{"title":"ZMD","iconClass":null,"rules":null,"unit":null,"id":0,"key":"0","children":[{"title":"Napięcia i prądy fazowe","iconClass":null,"rules":null,"unit":null,"id":1,"key":"1","children":[{"title":"Napięcia fazowe","iconClass":null,"rules":null,"unit":null,"id":2,"key":"2","children":[],"hiddenChildren":[{"title":"Napięcie fazy L1","iconClass":null,"rules":"UL1","unit":"V","id":3,"key":"3","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Napięcie fazy L2","iconClass":null,"rules":"UL2","unit":"V","id":5,"key":"5","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Napięcie fazy L3","iconClass":null,"rules":"UL3","unit":"V","id":7,"key":"7","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Prądy fazowe","iconClass":null,"rules":null,"unit":null,"id":9,"key":"9","children":[],"hiddenChildren":[{"title":"Prąd fazy L1","iconClass":null,"rules":"IL1","unit":"A","id":10,"key":"10","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Prąd fazy L2","iconClass":null,"rules":"IL2","unit":"A","id":12,"key":"12","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Prąd fazy L3","iconClass":null,"rules":"IL3","unit":"A","id":14,"key":"14","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Prąd w przewodzie N","iconClass":null,"rules":"IN","unit":"A","id":16,"key":"16","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false}],"hiddenChildren":[],"isLazy":false},{"title":"Współczynniki cosinus i tangens","iconClass":null,"rules":null,"unit":null,"id":18,"key":"18","children":[],"hiddenChildren":[{"title":"Cosinus","iconClass":null,"rules":"Cos","unit":"","id":19,"key":"19","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Tangens","iconClass":null,"rules":"Tg","unit":"","id":26,"key":"26","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła energii online","iconClass":null,"rules":null,"unit":null,"id":33,"key":"33","children":[{"title":"Wartość liczydła energii z uwzględnieniem mnożnej","iconClass":null,"rules":null,"unit":null,"id":34,"key":"34","children":[{"title":"Liczydła online energii czynnej pobranej","iconClass":null,"rules":null,"unit":null,"id":35,"key":"35","children":[],"hiddenChildren":[{"title":"Liczydło energii czynnej pobranej","iconClass":null,"rules":"LOA+S0","unit":"kWh","id":36,"key":"36","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii czynnej pobranej Strefa I","iconClass":null,"rules":"LOA+S1","unit":"kWh","id":38,"key":"38","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii czynnej pobranej Strefa II","iconClass":null,"rules":"LOA+S2","unit":"kWh","id":40,"key":"40","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii czynnej pobranej Strefa III","iconClass":null,"rules":"LOA+S3","unit":"kWh","id":42,"key":"42","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii czynnej pobranej Strefa IV","iconClass":null,"rules":"LOA+S4","unit":"kWh","id":44,"key":"44","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła online energii czynnej oddanej","iconClass":null,"rules":null,"unit":null,"id":46,"key":"46","children":[],"hiddenChildren":[{"title":"Liczydło energii czynnej oddanej","iconClass":null,"rules":"LOA-S0","unit":"kWh","id":47,"key":"47","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii czynnej oddanej Strefa I","iconClass":null,"rules":"LOA-S1","unit":"kWh","id":49,"key":"49","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii czynnej oddanej Strefa II","iconClass":null,"rules":"LOA-S2","unit":"kWh","id":51,"key":"51","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii czynnej oddanej Strefa III","iconClass":null,"rules":"LOA-S3","unit":"kWh","id":53,"key":"53","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii czynnej oddanej Strefa IV","iconClass":null,"rules":"LOA-S4","unit":"kWh","id":55,"key":"55","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła online energii biernej indukcyjnej","iconClass":null,"rules":null,"unit":null,"id":57,"key":"57","children":[],"hiddenChildren":[{"title":"Liczydło energii biernej indukcujnej","iconClass":null,"rules":"LOR+S0","unit":"kvarh","id":58,"key":"58","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej indukcujnej Strefa I","iconClass":null,"rules":"LOR+S1","unit":"kvarh","id":60,"key":"60","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej indukcujnej Strefa II","iconClass":null,"rules":"LOR+S2","unit":"kvarh","id":62,"key":"62","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej indukcujnej Strefa III","iconClass":null,"rules":"LOR+S3","unit":"kvarh","id":64,"key":"64","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej indukcujnej Strefa IV","iconClass":null,"rules":"LOR+S4","unit":"kvarh","id":66,"key":"66","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła online energii biernej pojemnościowej","iconClass":null,"rules":null,"unit":null,"id":68,"key":"68","children":[],"hiddenChildren":[{"title":"Liczydło energii biernej pojemnościowej","iconClass":null,"rules":"LOR-S0","unit":"kvarh","id":69,"key":"69","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej pojemnościowej Strefa I","iconClass":null,"rules":"LOR-S1","unit":"kvarh","id":71,"key":"71","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej pojemnościowej Strefa II","iconClass":null,"rules":"LOR-S2","unit":"kvarh","id":73,"key":"73","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej pojemnościowej Strefa III","iconClass":null,"rules":"LOR-S3","unit":"kvarh","id":75,"key":"75","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej pojemnościowej Strefa IV","iconClass":null,"rules":"LOR-S4","unit":"kvarh","id":77,"key":"77","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła online energii biernej indukcyjnej pobranej","iconClass":null,"rules":null,"unit":null,"id":79,"key":"79","children":[],"hiddenChildren":[{"title":"Liczydło energii biernej indukcyjnej pobranej","iconClass":null,"rules":"LOR1S0","unit":"kvarh","id":80,"key":"80","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej indukcyjnej pobranej Strefa I","iconClass":null,"rules":"LOR1S1","unit":"kvarh","id":82,"key":"82","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej indukcyjnej pobranej Strefa II","iconClass":null,"rules":"LOR1S2","unit":"kvarh","id":84,"key":"84","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej indukcyjnej pobranej Strefa III","iconClass":null,"rules":"LOR1S3","unit":"kvarh","id":86,"key":"86","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej indukcyjnej pobranej Strefa IV","iconClass":null,"rules":"LOR1S4","unit":"kvarh","id":88,"key":"88","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła online energii biernej indukcyjnej oddanej","iconClass":null,"rules":null,"unit":null,"id":90,"key":"90","children":[],"hiddenChildren":[{"title":"Liczydło energii biernej indukcyjnej oddanej","iconClass":null,"rules":"LOR2S0","unit":"kvarh","id":91,"key":"91","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej indukcyjnej oddanej Strefa I","iconClass":null,"rules":"LOR2S1","unit":"kvarh","id":93,"key":"93","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej indukcyjnej oddanej Strefa II","iconClass":null,"rules":"LOR2S2","unit":"kvarh","id":95,"key":"95","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej indukcyjnej oddanej Strefa III","iconClass":null,"rules":"LOR2S3","unit":"kvarh","id":97,"key":"97","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej indukcyjnej oddanej Strefa IV","iconClass":null,"rules":"LOR2S4","unit":"kvarh","id":99,"key":"99","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła online energii biernej pojemnościowej pobranej","iconClass":null,"rules":null,"unit":null,"id":101,"key":"101","children":[],"hiddenChildren":[{"title":"Liczydło energii biernej pojemnościowej pobranej","iconClass":null,"rules":"LOR3S0","unit":"kvarh","id":102,"key":"102","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej pojemnościowej pobranej Strefa I","iconClass":null,"rules":"LOR3S1","unit":"kvarh","id":104,"key":"104","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej pojemnościowej pobranej Strefa II","iconClass":null,"rules":"LOR3S2","unit":"kvarh","id":106,"key":"106","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej pojemnościowej pobranej Strefa III","iconClass":null,"rules":"LOR3S3","unit":"kvarh","id":108,"key":"108","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej pojemnościowej pobranej Strefa IV","iconClass":null,"rules":"LOR3S4","unit":"kvarh","id":110,"key":"110","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła online energii biernej pojemnościowej oddanej","iconClass":null,"rules":null,"unit":null,"id":112,"key":"112","children":[],"hiddenChildren":[{"title":"Liczydło energii biernej pojemnościowej oddanej","iconClass":null,"rules":"LOR4S0","unit":"kvarh","id":113,"key":"113","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej pojemnościowej oddanej Strefa I","iconClass":null,"rules":"LOR4S1","unit":"kvarh","id":115,"key":"115","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej pojemnościowej oddanej Strefa II","iconClass":null,"rules":"LOR4S2","unit":"kvarh","id":117,"key":"117","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej pojemnościowej oddanej Strefa III","iconClass":null,"rules":"LOR4S3","unit":"kvarh","id":119,"key":"119","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii biernej pojemnościowej oddanej Strefa IV","iconClass":null,"rules":"LOR4S4","unit":"kvarh","id":121,"key":"121","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła online energii pozornej","iconClass":null,"rules":null,"unit":null,"id":123,"key":"123","children":[],"hiddenChildren":[{"title":"Liczydło energii pozornej pobranej","iconClass":null,"rules":"LOS+","unit":"kVAh","id":124,"key":"124","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło energii pozornej oddanej","iconClass":null,"rules":"LOS-","unit":"kVAh","id":126,"key":"126","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false}],"hiddenChildren":[],"isLazy":false},{"title":"Wartość liczydła energii odczytana z urządzenia","iconClass":null,"rules":null,"unit":null,"id":128,"key":"128","children":[{"title":"Liczydła online energii czynnej pobranej","iconClass":null,"rules":null,"unit":null,"id":129,"key":"129","children":[],"hiddenChildren":[{"title":"Surowe liczydło energii czynnej pobranej","iconClass":null,"rules":"VLOA+S0","unit":"kWh","id":130,"key":"130","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii czynnej pobranej Strefa I","iconClass":null,"rules":"VLOA+S1","unit":"kWh","id":134,"key":"134","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii czynnej pobranej Strefa II","iconClass":null,"rules":"VLOA+S2","unit":"kWh","id":138,"key":"138","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii czynnej pobranej Strefa III","iconClass":null,"rules":"VLOA+S3","unit":"kWh","id":142,"key":"142","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii czynnej pobranej Strefa IV","iconClass":null,"rules":"VLOA+S4","unit":"kWh","id":146,"key":"146","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła online energii czynnej oddanej","iconClass":null,"rules":null,"unit":null,"id":150,"key":"150","children":[],"hiddenChildren":[{"title":"Surowe liczydło energii czynnej oddanej","iconClass":null,"rules":"VLOA-S0","unit":"kWh","id":151,"key":"151","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii czynnej oddanej Strefa I","iconClass":null,"rules":"VLOA-S1","unit":"kWh","id":155,"key":"155","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii czynnej oddanej Strefa II","iconClass":null,"rules":"VLOA-S2","unit":"kWh","id":159,"key":"159","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii czynnej oddanej Strefa III","iconClass":null,"rules":"VLOA-S3","unit":"kWh","id":163,"key":"163","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii czynnej oddanej Strefa IV","iconClass":null,"rules":"VLOA-S4","unit":"kWh","id":167,"key":"167","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła online energii biernej indukcyjnej","iconClass":null,"rules":null,"unit":null,"id":171,"key":"171","children":[],"hiddenChildren":[{"title":"Surowe liczydło energii biernej indukcujnej","iconClass":null,"rules":"VLOR+S0","unit":"kvarh","id":172,"key":"172","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej indukcujnej Strefa I","iconClass":null,"rules":"VLOR+S1","unit":"kvarh","id":176,"key":"176","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej indukcujnej Strefa II","iconClass":null,"rules":"VLOR+S2","unit":"kvarh","id":180,"key":"180","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej indukcujnej Strefa III","iconClass":null,"rules":"VLOR+S3","unit":"kvarh","id":184,"key":"184","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej indukcujnej Strefa IV","iconClass":null,"rules":"VLOR+S4","unit":"kvarh","id":188,"key":"188","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła online energii biernej pojemnościowej","iconClass":null,"rules":null,"unit":null,"id":192,"key":"192","children":[],"hiddenChildren":[{"title":"Surowe liczydło energii biernej pojemnościowej","iconClass":null,"rules":"VLOR-S0","unit":"kvarh","id":193,"key":"193","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej pojemnościowej Strefa I","iconClass":null,"rules":"VLOR-S1","unit":"kvarh","id":197,"key":"197","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej pojemnościowej Strefa II","iconClass":null,"rules":"VLOR-S2","unit":"kvarh","id":201,"key":"201","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej pojemnościowej Strefa III","iconClass":null,"rules":"VLOR-S3","unit":"kvarh","id":205,"key":"205","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej pojemnościowej Strefa IV","iconClass":null,"rules":"VLOR-S4","unit":"kvarh","id":209,"key":"209","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła online energii biernej indukcyjnej pobranej","iconClass":null,"rules":null,"unit":null,"id":213,"key":"213","children":[],"hiddenChildren":[{"title":"Surowe liczydło energii biernej indukcyjnej pobranej","iconClass":null,"rules":"VLOR1S0","unit":"kvarh","id":214,"key":"214","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej indukcyjnej pobranej Strefa I","iconClass":null,"rules":"VLOR1S1","unit":"kvarh","id":218,"key":"218","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej indukcyjnej pobranej Strefa II","iconClass":null,"rules":"VLOR1S2","unit":"kvarh","id":222,"key":"222","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej indukcyjnej pobranej Strefa III","iconClass":null,"rules":"VLOR1S3","unit":"kvarh","id":226,"key":"226","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej indukcyjnej pobranej Strefa IV","iconClass":null,"rules":"VLOR1S4","unit":"kvarh","id":230,"key":"230","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła online energii biernej indukcyjnej oddanej","iconClass":null,"rules":null,"unit":null,"id":234,"key":"234","children":[],"hiddenChildren":[{"title":"Surowe liczydło energii biernej indukcyjnej oddanej","iconClass":null,"rules":"VLOR2S0","unit":"kvarh","id":235,"key":"235","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej indukcyjnej oddanej Strefa I","iconClass":null,"rules":"VLOR2S1","unit":"kvarh","id":239,"key":"239","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej indukcyjnej oddanej Strefa II","iconClass":null,"rules":"VLOR2S2","unit":"kvarh","id":243,"key":"243","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej indukcyjnej oddanej Strefa III","iconClass":null,"rules":"VLOR2S3","unit":"kvarh","id":247,"key":"247","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej indukcyjnej oddanej Strefa IV","iconClass":null,"rules":"VLOR2S4","unit":"kvarh","id":251,"key":"251","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła online energii biernej pojemnościowej pobranej","iconClass":null,"rules":null,"unit":null,"id":255,"key":"255","children":[],"hiddenChildren":[{"title":"Surowe liczydło energii biernej pojemnościowej pobranej","iconClass":null,"rules":"VLOR3S0","unit":"kvarh","id":256,"key":"256","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej pojemnościowej pobranej Strefa I","iconClass":null,"rules":"VLOR3S1","unit":"kvarh","id":260,"key":"260","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej pojemnościowej pobranej Strefa II","iconClass":null,"rules":"VLOR3S2","unit":"kvarh","id":264,"key":"264","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej pojemnościowej pobranej Strefa III","iconClass":null,"rules":"VLOR3S3","unit":"kvarh","id":268,"key":"268","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej pojemnościowej pobranej Strefa IV","iconClass":null,"rules":"VLOR3S4","unit":"kvarh","id":272,"key":"272","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła online energii biernej pojemnościowej oddanej","iconClass":null,"rules":null,"unit":null,"id":276,"key":"276","children":[],"hiddenChildren":[{"title":"Surowe liczydło energii biernej pojemnościowej oddanej","iconClass":null,"rules":"VLOR4S0","unit":"kvarh","id":277,"key":"277","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej pojemnościowej oddanej Strefa I","iconClass":null,"rules":"VLOR4S1","unit":"kvarh","id":281,"key":"281","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej pojemnościowej oddanej Strefa II","iconClass":null,"rules":"VLOR4S2","unit":"kvarh","id":285,"key":"285","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej pojemnościowej oddanej Strefa III","iconClass":null,"rules":"VLOR4S3","unit":"kvarh","id":289,"key":"289","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii biernej pojemnościowej oddanej Strefa IV","iconClass":null,"rules":"VLOR4S4","unit":"kvarh","id":293,"key":"293","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła energii pozornej","iconClass":null,"rules":null,"unit":null,"id":297,"key":"297","children":[],"hiddenChildren":[{"title":"Surowe liczydło energii pozornej pobranej","iconClass":null,"rules":"VLOS+","unit":"kVAh","id":298,"key":"298","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Surowe liczydło energii pozornej oddanej","iconClass":null,"rules":"VLOS-","unit":"kVAh","id":302,"key":"302","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false}],"hiddenChildren":[],"isLazy":false}],"hiddenChildren":[],"isLazy":false},{"title":"Kąty fazowe","iconClass":null,"rules":null,"unit":null,"id":306,"key":"306","children":[],"hiddenChildren":[{"title":"Kąt fazowy napięcie L1 / napięcie L1","iconClass":null,"rules":"Angle UL1/UL1","unit":"Deg","id":307,"key":"307","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Kąt fazowy napięcie L2 / napięcie L1","iconClass":null,"rules":"Angle UL2/UL1","unit":"Deg","id":309,"key":"309","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Kąt fazowy napięcie L3 / napięcie L1","iconClass":null,"rules":"Angle UL3/UL1","unit":"Deg","id":311,"key":"311","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Kąt fazowy prąd L1 / napięcie L1","iconClass":null,"rules":"Angle IL1/UL1","unit":"Deg","id":313,"key":"313","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Kąt fazowy prąd L2 / napięcie L1","iconClass":null,"rules":"Angle IL2/UL1","unit":"Deg","id":315,"key":"315","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Kąt fazowy prąd L3 / napięcie L1","iconClass":null,"rules":"Angle IL3/UL1","unit":"Deg","id":317,"key":"317","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Historia","iconClass":null,"rules":null,"unit":null,"id":319,"key":"319","children":[{"title":"Moc","iconClass":null,"rules":null,"unit":null,"id":320,"key":"320","children":[],"hiddenChildren":[{"title":"Moc czynna pobrana","iconClass":null,"rules":"P+","unit":"kW","id":321,"key":"321","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Moc czynna oddana","iconClass":null,"rules":"P-","unit":"kW","id":323,"key":"323","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Moc bierna indukcyjna","iconClass":null,"rules":"Q+","unit":"kvar","id":325,"key":"325","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Moc bierna pojemnościowa","iconClass":null,"rules":"Q-","unit":"kvar","id":327,"key":"327","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Energia","iconClass":null,"rules":null,"unit":null,"id":329,"key":"329","children":[],"hiddenChildren":[{"title":"Energia czynna pobrana","iconClass":null,"rules":"A+","unit":"kWh","id":330,"key":"330","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Energia czynna oddana","iconClass":null,"rules":"A-","unit":"kWh","id":334,"key":"334","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Energia bierna indukcyjna","iconClass":null,"rules":"R+","unit":"kvarh","id":338,"key":"338","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Energia bierna pojemnościowa","iconClass":null,"rules":"R-","unit":"kvarh","id":342,"key":"342","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false}],"hiddenChildren":[],"isLazy":false},{"title":"Liczydła rozliczeniowe","iconClass":null,"rules":null,"unit":null,"id":346,"key":"346","children":[{"title":"Liczydła rozliczeniowe energii czynnej pobranej","iconClass":null,"rules":null,"unit":null,"id":347,"key":"347","children":[],"hiddenChildren":[{"title":"Liczydło rozliczeniowe energii czynnej pobranej","iconClass":null,"rules":"LRA+_S0","unit":"kWh","id":348,"key":"348","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii czynnej pobranej Strefa I","iconClass":null,"rules":"LRA+_S1","unit":"kWh","id":350,"key":"350","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii czynnej pobranej Strefa II","iconClass":null,"rules":"LRA+_S2","unit":"kWh","id":352,"key":"352","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii czynnej pobranej Strefa III","iconClass":null,"rules":"LRA+_S3","unit":"kWh","id":354,"key":"354","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii czynnej pobranej Strefa IV","iconClass":null,"rules":"LRA+_S4","unit":"kWh","id":356,"key":"356","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła rozliczeniowe energii czynnej oddanej","iconClass":null,"rules":null,"unit":null,"id":358,"key":"358","children":[],"hiddenChildren":[{"title":"Liczydło rozliczeniowe energii czynnej oddanej","iconClass":null,"rules":"LRA-_S0","unit":"kWh","id":359,"key":"359","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii czynnej oddanej Strefa I","iconClass":null,"rules":"LRA-_S1","unit":"kWh","id":361,"key":"361","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii czynnej oddanej Strefa II","iconClass":null,"rules":"LRA-_S2","unit":"kWh","id":363,"key":"363","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii czynnej oddanej Strefa III","iconClass":null,"rules":"LRA-_S3","unit":"kWh","id":365,"key":"365","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii czynnej oddanej Strefa IV","iconClass":null,"rules":"LRA-_S4","unit":"kWh","id":367,"key":"367","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła rozliczeniowe energii biernej indukcyjnej","iconClass":null,"rules":null,"unit":null,"id":369,"key":"369","children":[],"hiddenChildren":[{"title":"Liczydło rozliczeniowe energi biernej indukcyjnej","iconClass":null,"rules":"LRR+_S0","unit":"kvarh","id":370,"key":"370","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energi biernej indukcyjnej Strefa I","iconClass":null,"rules":"LRR+_S1","unit":"kvarh","id":372,"key":"372","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energi biernej indukcyjnej Strefa II","iconClass":null,"rules":"LRR+_S2","unit":"kvarh","id":374,"key":"374","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energi biernej indukcyjnej Strefa III","iconClass":null,"rules":"LRR+_S3","unit":"kvarh","id":376,"key":"376","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energi biernej indukcyjnej Strefa IV","iconClass":null,"rules":"LRR+_S4","unit":"kvarh","id":378,"key":"378","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła rozliczeniowe energii biernej pojemnościowej","iconClass":null,"rules":null,"unit":null,"id":380,"key":"380","children":[],"hiddenChildren":[{"title":"Liczydło rozliczeniowe energi biernej pojemnościowej","iconClass":null,"rules":"LRR-_S0","unit":"kvarh","id":381,"key":"381","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energi biernej pojemnościowej Strefa I","iconClass":null,"rules":"LRR-_S1","unit":"kvarh","id":383,"key":"383","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energi biernej pojemnościowej Strefa II","iconClass":null,"rules":"LRR-_S2","unit":"kvarh","id":385,"key":"385","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energi biernej pojemnościowej Strefa III","iconClass":null,"rules":"LRR-_S3","unit":"kvarh","id":387,"key":"387","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energi biernej pojemnościowej Strefa IV","iconClass":null,"rules":"LRR-_S4","unit":"kvarh","id":389,"key":"389","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła rozliczeniowe energii biernej indukcyjnej pobranej","iconClass":null,"rules":null,"unit":null,"id":391,"key":"391","children":[],"hiddenChildren":[{"title":"Liczydło rozliczeniowe energii biernej indukcyjnej pobranej","iconClass":null,"rules":"LRR1_S0","unit":"kvarh","id":392,"key":"392","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii biernej indukcyjnej pobranej Strefa I","iconClass":null,"rules":"LRR1_S1","unit":"kvarh","id":394,"key":"394","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii biernej indukcyjnej pobranej Strefa II","iconClass":null,"rules":"LRR1_S2","unit":"kvarh","id":396,"key":"396","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii biernej indukcyjnej pobranej Strefa III","iconClass":null,"rules":"LRR1_S3","unit":"kvarh","id":398,"key":"398","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii biernej indukcyjnej pobranej Strefa IV","iconClass":null,"rules":"LRR1_S4","unit":"kvarh","id":400,"key":"400","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła rozliczeniowe energii biernej indukcyjnej oddanej","iconClass":null,"rules":null,"unit":null,"id":402,"key":"402","children":[],"hiddenChildren":[{"title":"Liczydło rozliczeniowe energii biernej indukcyjnej oddanej","iconClass":null,"rules":"LRR2_S0","unit":"kvarh","id":403,"key":"403","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii biernej indukcyjnej oddanej Strefa I","iconClass":null,"rules":"LRR2_S1","unit":"kvarh","id":405,"key":"405","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii biernej indukcyjnej oddanej Strefa II","iconClass":null,"rules":"LRR2_S2","unit":"kvarh","id":407,"key":"407","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii biernej indukcyjnej oddanej Strefa III","iconClass":null,"rules":"LRR2_S3","unit":"kvarh","id":409,"key":"409","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii biernej indukcyjnej oddanej Strefa IV","iconClass":null,"rules":"LRR2_S4","unit":"kvarh","id":411,"key":"411","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła rozliczeniowe energii biernej pojemnościowej pobranej","iconClass":null,"rules":null,"unit":null,"id":413,"key":"413","children":[],"hiddenChildren":[{"title":"Liczydło rozliczeniowe energii biernej pojemnościowej pobranej","iconClass":null,"rules":"LRR3_S0","unit":"kvarh","id":414,"key":"414","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii biernej pojemnościowej pobranej Strefa I","iconClass":null,"rules":"LRR3_S1","unit":"kvarh","id":416,"key":"416","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii biernej pojemnościowej pobranej Strefa II","iconClass":null,"rules":"LRR3_S2","unit":"kvarh","id":418,"key":"418","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii biernej pojemnościowej pobranej Strefa III","iconClass":null,"rules":"LRR3_S3","unit":"kvarh","id":420,"key":"420","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii biernej pojemnościowej pobranej Strefa IV","iconClass":null,"rules":"LRR3_S4","unit":"kvarh","id":422,"key":"422","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false},{"title":"Liczydła rozliczeniowe energii biernej pojemnościowej oddanej","iconClass":null,"rules":null,"unit":null,"id":424,"key":"424","children":[],"hiddenChildren":[{"title":"Liczydło rozliczeniowe energii biernej pojemnościowej oddanej","iconClass":null,"rules":"LRR4_S0","unit":"kvarh","id":425,"key":"425","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii biernej pojemnościowej oddanej Strefa I","iconClass":null,"rules":"LRR4_S1","unit":"kvarh","id":427,"key":"427","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii biernej pojemnościowej oddanej Strefa II","iconClass":null,"rules":"LRR4_S2","unit":"kvarh","id":429,"key":"429","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii biernej pojemnościowej oddanej Strefa III","iconClass":null,"rules":"LRR4_S3","unit":"kvarh","id":431,"key":"431","children":[],"hiddenChildren":[],"isLazy":false},{"title":"Liczydło rozliczeniowe energii biernej pojemnościowej oddanej Strefa IV","iconClass":null,"rules":"LRR4_S4","unit":"kvarh","id":433,"key":"433","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false}],"hiddenChildren":[],"isLazy":false},{"title":"Inne","iconClass":null,"rules":null,"unit":null,"id":435,"key":"435","children":[],"hiddenChildren":[{"title":"Częstotliwość","iconClass":null,"rules":"F","unit":"Hz","id":436,"key":"436","children":[],"hiddenChildren":[],"isLazy":false}],"isLazy":false}],"hiddenChildren":[],"isLazy":false}');
//	    	console.log($scope.mockData);
//	    	$scope.mockData.children[0].hiddenChildren.push($scope.mockData.children[1].hiddenChildren[0]);
//	    	$scope.mockData.children[0].hiddenChildren[0].id=5555;
	    	
	    	$scope.prototypes = {
	    			Root: function(data) {
	    				var _this = this;
	    				this.selectedItems = [];
	    				this.parent = null;
	    				this.nestingLevel = 0;
	    				this.currentlySelectedItem = null;
	    				
//	    				selectionStatus - 'NONE' - nic nie jest zaznaczone, 'PART' - część w środku jest zaznaczona, 'ALL' - wszystko w środku jest zaznaczone
	    				this.selectionStatus = "NONE";
	    				for (var key in data) {
	    					if (key !== "children" && key !== "hiddenChildren") this[key] = data[key];
	    					else {
	    						this[key] = data[key].map(function(obj) {
	    							return new $scope.prototypes.Node(obj, _this);
	    						});
	    					}
	    	    		}
	    				
	    			},
	    			
	    			Node: function(data, parent) {
	    				var _this = this;
	    				this.parent = parent;
	    				this.nestingLevel = this.parent.nestingLevel + 1;
	    				this.isToggled = false;
//	    				selectionStatus - 'NONE' - nic nie jest zaznaczone, 'PART' - część w środku jest zaznaczona, 'ALL' - wszystko w środku jest zaznaczone
	    				this.selectionStatus = 'NONE';
	    				for (var key in data) {
	    					if (key !== "children" && key !== "hiddenChildren") this[key] = data[key];
	    					else {
	    						this[key] = data[key].map(function(obj) {
	    							return new $scope.prototypes.Node(obj, _this);
	    						});
	    					}
	    				}	
	    			}
	    	}
	    	$scope.parseInputModel = function(inputModel) {
//	    		$scope.psSelectedItems = angular.copy(inputModel);
	    		$scope.mmSourceData = new $scope.prototypes.Root(angular.copy(inputModel));
	    		$scope.mmSelectedItems = $scope.mmSourceData.selectedItems;
	    	}
	    	
	    	
	    	
	    	$scope.parseInputModel($scope.mmSourceData);
	    	// $scope.parseInputModel($scope.mockData);
//	    	$scope.selectItemsByIds($scope.psMockData);
    		console.log($scope.mmSourceData);

	    	
//	    	dodawanie wielu metod do prototypu Root
    		(function() {
	    		this.isRoot = function() {
					return true;
				}
				this.isNode = function() {
					return false;
				}
				this.select = function() {
					$scope.mmSourceData.currentlySelectedItem = "root";
				}
				this.selectAll = function(selectionMode) {
					if(selectionMode !== undefined) {
						this.selectionStatus = selectionMode;
						for(var i=0; i<this.children.length; i++) {
    						this.children[i].selectAll(selectionMode);
    					}
					}
					else if(this.selectionStatus !== 'ALL') 
					{
						this.selectionStatus = 'ALL';
    					for(var i=0; i<this.children.length; i++) {
    						this.children[i].selectAll('ALL');
    					}
					}
					else
					{
						this.selectionStatus = 'NONE';
						for(var i=0; i<this.children.length; i++) {
    						this.children[i].selectAll('NONE');
    					}
					}
					
				}
	    		
	    	}).call($scope.prototypes.Root.prototype);
    		
//    		dodawanie wielu metod do prototypu Node
    		(function() {
    			this.isRoot = function() {
					return false;
				}
				this.isNode = function() {
					return true;
				}
				this.toggle = function() {
					if(this.isToggled) this.isToggled = false;
					else this.isToggled = true;
				}
				this.select = function() {
					$scope.mmSourceData.currentlySelectedItem = this;
				}
    				
    			
				this.selectAll = function(selectionMode) {
					var selectedIdsList = $scope.mmSourceData.selectedItems.map(function(obj) {
						return obj.id;
					});
					if(selectionMode !== undefined) {
						this.selectionStatus = selectionMode;
						for(var i=0; i<this.children.length; i++) {
    						this.children[i].selectAll(selectionMode);
    					}
						for(var i=0; i<this.hiddenChildren.length; i++) {
							this.hiddenChildren[i].selectAll(selectionMode);
						}
						if(this.isRealLeaf()) {
							if(selectionMode === 'NONE') {
								if(selectedIdsList.indexOf(this.id) !== -1) $scope.mmSourceData.selectedItems.splice(selectedIdsList.indexOf(this.id),1);
							}
							else if(selectionMode === 'ALL') {
								if(selectedIdsList.indexOf(this.id) === -1) $scope.mmSourceData.selectedItems.push(this);
							}
    					}
					}
					else if(this.selectionStatus !== 'ALL') {
						this.selectionStatus = 'ALL';
    					for(var i=0; i<this.children.length; i++) {
    						this.children[i].selectAll('ALL');
    					}
						for(var i=0; i<this.hiddenChildren.length; i++) {
							this.hiddenChildren[i].selectAll('ALL');
						}
    					if(selectedIdsList.indexOf(this.id) === -1 && this.isRealLeaf()) $scope.mmSourceData.selectedItems.push(this);
    					
					}
					else {
						this.selectionStatus = 'NONE';
						for(var i=0; i<this.children.length; i++) {
    						this.children[i].selectAll('NONE');
    					}
						for(var i=0; i<this.hiddenChildren.length; i++) {
							this.hiddenChildren[i].selectAll('NONE');
						}
    					if(selectedIdsList.indexOf(this.id) !== -1 && this.isRealLeaf()) $scope.mmSourceData.selectedItems.splice(selectedIdsList.indexOf(this.id),1);
					}
					this.countSelections();
					
					
				}
				
				this.countSelections = function() {
					var _parent = this.parent;
					while(_parent !== null) {
						var selectionsStatusesCounter = {selected: 0, unselected: 0, partlySelected: 0};
						for(var i=0; i<_parent.hiddenChildren.length; i++) {
							switch(_parent.hiddenChildren[i].selectionStatus) {
								case ('ALL'):
									selectionsStatusesCounter.selected++;
									break;
								case('PART'):
									selectionsStatusesCounter.partlySelected++;
									break;
								case('NONE'):
									selectionsStatusesCounter.unselected++;
									break;
							}
						}
						for(var i=0; i<_parent.children.length; i++) {
							switch(_parent.children[i].selectionStatus) {
							case ('ALL'):
								selectionsStatusesCounter.selected++;
								break;
							case('PART'):
								selectionsStatusesCounter.partlySelected++;
								break;
							case('NONE'):
								selectionsStatusesCounter.unselected++;
								break;
							}
						}
						
						if((selectionsStatusesCounter.selected > 0 && selectionsStatusesCounter.unselected > 0) || selectionsStatusesCounter.partlySelected > 0) _parent.selectionStatus = 'PART';
						else if(selectionsStatusesCounter.unselected > 0) _parent.selectionStatus = 'NONE';
						else _parent.selectionStatus = 'ALL';
//						console.log("POKA PARENTA po zmianie:",_parent);
//						console.log("XD", selectionsStatusesCounter);
						
						_parent = _parent.parent;
					}
					
				}

				
				this.isLastNode = function() {
					if(this.children.length === 0) return true;
					else return false;
				}
				this.isRealLeaf = function() {
					if(this.children.length === 0 && this.hiddenChildren.length === 0) return true;
					else return false;
				}
    		}).call($scope.prototypes.Node.prototype);

    		$scope.selectItemsByIds = function(node) {
	    		if($scope.mmAlreadySelectedItems !== undefined && $scope.mmAlreadySelectedItems !== null) {
	    			for(var i=0; i<node.hiddenChildren.length; i++) {
	    				if($scope.mmAlreadySelectedItems.indexOf(node.hiddenChildren[i].id) !== -1) node.hiddenChildren[i].selectAll();
	    			}
	    			for(var i=0; i<node.children.length; i++) {
	    				$scope.selectItemsByIds(node.children[i]);
	    			}
	    		}
	    	}
    		// $scope.selectItemsByIds($scope.mmSourceData);
	    	
	    	$scope.showModel = function() {
	    		
	    		console.log($scope.mmSourceData);
	    		console.log("XDD",$scope.mmSelectedItems);
	    	}
	    	

	    	
//	    	console.log("root",$scope.psSourceData);
	    	
	    	$timeout(function() {
	    		$scope.$apply();
	    	}, 0);
	    }]
	 }
}