(function() {
	'use strict';

	debugger;
	
	var base = 10;

	function randomFunction(b) {
		var result = base + b;
		console.log(result * 2);
	}

	function randomFunctionTwo(b) {
		base = 20;
		var result = base - b;
		console.log(result * 2);
	}

	randomFunction(2);
	randomFunctionTwo(3);
	randomFunction(2);

})();
