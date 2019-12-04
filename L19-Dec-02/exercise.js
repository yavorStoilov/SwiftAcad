(function() {
	'use strict';
	
	/* слайд 13 от 09-dom-bom.pdf */

	// select the elements
	var firstDiv = document.getElementById('first');
	var secondDiv = document.getElementsByClassName('middle')[0];
	var thirdDiv = document.querySelector('div:nth-child(3)');

	// change their background-color
	firstDiv.style.backgroundColor = 'lightgreen';
	secondDiv.style.backgroundColor = 'lightyellow';
	thirdDiv.style.backgroundColor = 'coral';

	// fill the second div with html content
	secondDiv.innerHTML = `
		<h1>Hi</h1>
		<p>Paragraph</p>
	`;
	/* за да вземем html от файл или url, трябва да ползваме
		асинхронно зареждане - XMLHttpRequest / ajax */

	// create a new span element and add text to it
	var span = document.createElement('span');
	span.textContent = 'A new span';

	// append the new span to the second div
	secondDiv.appendChild(span);

	// swap the html content of the first and third divs
	var tempHTML = firstDiv.innerHTML;
	firstDiv.innerHTML = thirdDiv.innerHTML;
	thirdDiv.innerHTML = tempHTML;

})();
