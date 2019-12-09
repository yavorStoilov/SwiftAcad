(function() {
	'use strict';

	document.addEventListener("DOMContentLoaded", function() {
		console.log("DOMContentLoaded");
	});

	$(document).ready(consoleReady);

	function consoleReady(event) {
		console.log("DOMContentLoaded - jQuery");
		console.log(event);
	}

	$("h1").dblclick(clickH1);

	function clickH1(event) {
		console.log(event);
	}

	console.log("log");	

})();
