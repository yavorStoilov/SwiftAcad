reverseString("asimpleword"); // -> "drowelpmisa"

var exampleWord = "asimpleword";

// Решение 1:
function reverseWord(word) {
	var splitWordArray = word.split("");
	var reversedArray = splitWordArray.reverse();
	var reversedWord = reversedArray.join("");
	return reversedWord;
}

// Решение 2:
function reverseWord(word) {
	return word.split("").reverse().join("");
}
