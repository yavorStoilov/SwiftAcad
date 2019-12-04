(function() {
	'use strict';

	// с Native JavaScript:

	var body = document.querySelector("body");
	var buttonBlue = document.querySelector("#blue");
	var buttonRed = document.querySelector("#red");

	buttonBlue.addEventListener("click", changeBgToBlue);
	buttonBlue.addEventListener("dblclick", changeBgToWhite);
	buttonRed.addEventListener("click", changeBgToRedOrOrange);
	/* за разкачане на eventListener:
	   buttonBlue.removeEventListener("click"); */

	function changeBgToBlue() {
		body.style.backgroundColor = "blue";
	}

	function changeBgToRedOrOrange() {
		if (body.style.backgroundColor === "blue") {
			body.style.backgroundColor = "red";
		} else {
			body.style.backgroundColor = "orange";
		}
	}

	function changeBgToWhite() {
		body.style.backgroundColor = "white";
	}

	// С jQuery:

	var body = $("body");
	$("#blue").on("click", changeBgToBlue)
			  .on("dblclick", changeBgToWhite);
	$("#red").on("click", changeBgToRedOrOrange);

	function changeBgToBlue() {
		body.css("background-color", "blue");
	}

	function changeBgToRedOrOrange() {
		if (body.css("background-color") === "rgb(0, 0, 255)") {
			body.css("background-color", "red");
		} else {
			body.css("background-color", "orange");
		}
	}

	function changeBgToWhite() {
		body.css("background-color", "white");
	}

	/* можете да променяте стойностите на повече от едно
	   css property като подадете обект: */
	body.css({
		"background-color": "white",
		"border": "2px solid black"
	})

})();
