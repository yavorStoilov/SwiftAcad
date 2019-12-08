
(function () {
	'use strict';

	//Zadacha 1:

	document.addEventListener("DOMContentLoaded", function () {
		console.log("PAGE DOM LOADED");
	});

	window.onload = function () {
		console.log("PAGE BOM LOADED");
	};


	$("html").click(clickHTML);

	function clickHTML(event) {
		console.log("x: " + event.pageX + ", y: " + event.pageY);
	}



	// Zadacha 2:
	var array = ["banana", "kiwi", "strawberry", "ice"];
	console.log(array);
	console.log(arrange);

	function arrange(arr) {
		var result = arr.sort(function (a, b) {
			return a.length - b.length;
		});
		return result;
	};

	console.log(arrange(array));
	
	//napisal sam go taka s teq console.log-ove s prezentacionna cel,
	//t.e direktno v conzolata da se vidi vsichko.
	//ako chetesh tova znachi ne sam se spravil gg

})();
