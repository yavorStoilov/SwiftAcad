(function() {
	'use strict';

	var showMe = document.getElementById("showMe");
	var triggerMe = document.querySelector("#triggerMe");
	var span = document.querySelector("div:nth-child(4) span");

	setTimeout(function() {
		showMe.classList.remove("hidden");
	}, 3000);

	var intervalTrigger = setInterval(trigger, 3000);

	// clearInterval(intervalTrigger);

	function trigger() {
		triggerMe.classList.toggle("hidden");
	}

	span.textContent = window.location.href;
	span.parentElement.parentElement.classList.remove("hidden");

})();
