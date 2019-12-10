(function() {
	'use strict';

	var btn = document.querySelector("button");
	var div = document.querySelector("div");

	document.addEventListener("click", function() {
		console.log("click on the document");
	});

	btn.addEventListener("click", function(event) {
		event.stopPropagation();
		console.log("click on the button");
	});

	div.addEventListener("click", function() {
		console.log("click on the div");
	});

	var anchor = document.querySelector("a");

	anchor.addEventListener("click", function(event) {
		event.preventDefault();
		alert("redirects not allowed");
	});

})();
