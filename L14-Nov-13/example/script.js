alert(helloOrGoodbye("hi"));
console.log(helloOrGoodbye("why"));
document.write("The text is:", helloOrGoodbye());

function helloOrGoodbye(conditionText) {
	var returnText;
	if (conditionText == "hi") {
		returnText = "Hello";
    } else if (conditionText == "why") {
		returnText = "Why?";
	} else {
		returnText = "Goodbye";
	}
	return returnText;
}
