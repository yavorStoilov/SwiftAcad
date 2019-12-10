(function() {
	'use strict';

	/*
	Задача 1:
		Напишете скрипт, който да извежда следните 2 заглавия в
		една html страница (под заглавия разбирайте heading тагове):
		• "PAGE DOM LOADED" - при настъпване на DOMContentLoaded събитието
		• "PAGE BOM LOADED" - при window.onload
		Направете обработка на събитието клик (където и да е върху страницата),
		като изписвате текста "click captured: х<position>, y<position>"),
		където position са съответно координатите (X и Y), където е кликнато.
	*/

	window.onload = function() {
		appendHeadingToBody("PAGE BOM LOADED");
	}

	document.addEventListener("DOMContentLoaded", function() {
		appendHeadingToBody("PAGE DOM LOADED");
	});

	function appendHeadingToBody(text) {
		var heading = document.createElement("h1");
		heading.textContent = text;
		document.body.appendChild(heading);
	}

	var pageX = document.querySelector("#pageX");
	var pageY = document.querySelector("#pageY");
	var clientX = document.querySelector("#clientX");
	var clientY = document.querySelector("#clientY");

	document.addEventListener("click", function(event) {
		pageX.textContent = event.pageX;
		pageY.textContent = event.pageY;
		clientX.textContent = event.clientX;
		clientY.textContent = event.clientY;
	});


	/*
	Задача 2 (да си припомним малко и от стария материал):
		Напишете функция, която приема като входен параметър масив от strings
		и подрежда масивът във възходящ ред по дължината на тези strings.

		Примерен резултат:
			["banana", "kiwi", "strawberry", "ice"] =>
			["ice", "kiwi", "banana", "strawberry"]
	*/

	compareStringsByLength(arrayFruits);

	function compareStringsByLength(array) {
		array.sort(compareStringLength);
		return array;
	}

	// сортиращ механизъм вариант 1:
	function compareStringLength(a, b) {
		if (a.length > b.length) { return 1; }
		if (a.length < b.length) { return -1; }
		return 0;
	}

	// сортиращ механизъм вариант 2:
	function compareStringLength(a, b) {
		return a.length - b.length;
	}

})();
