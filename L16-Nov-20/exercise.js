/*
Write a function that takes an array of strings
and merges them together in a sentence-like string.
*/
var arr = ["I", "am", "a", "developer"];
joinArrInOne(arr); // -> "I am a developer."
joinArrWithoutLoop(arr); // -> "I am a developer."

// Solution using a for loop
function joinArrInOne(arr) {
	var sentence = "";
	for (var i = 0; i < arr.length; i++) {
		sentence += (i === arr.length - 1) ?
			arr[i] + "." : arr[i] + " ";
	}
	return sentence;
}

// Solution using no loop
function joinArrWithoutLoop(arr) {
	return arr.join() + ".";
}


/*
Write a sorting function that matches values
from an array towards another array and
moves the matching values to the beginning.
After that remove the non-matching values
from the array.
*/
var animals = ["cat", "dog", "bird", "snake"];
var array = ["tree", 5, "dog", "ball", "snake"];
array.sort(compare); // -> ["dog", "snake", "tree", 5, "ball"]
array.sort(compareWithIncludes); // -> ["dog", "snake", "tree", 5, "ball"]
removeNonAnimals(array); // -> ["dog", "snake"] Note: NEEDS TO BE SORTED FIRST

// Solution using Array.prototype.indexOf
function compare(a, b) {
	if (animals.indexOf(a) < 0 && animals.indexOf(b) >= 0) {
		return 1;
	}
	if (animals.indexOf(a) >= 0 && animals.indexOf(b) < 0) {
		return -1;
	}
	return 0;
}

// Solution using Array.prototype.includes
function compareWithIncludes(a, b) {
	if (!animals.includes(a) && animals.includes(b)) {
		return 1;
	}
	if (animals.includes(a) && !animals.includes(b)) {
		return -1;
	}
	return 0;
}

// Remove non-animals from the already sorted array
function removeNonAnimals(array) {
	for (var i = 0; i < array.length; i++) {
		if (!animals.includes(array[i])) {
            firstElemThatIsNotAnimal = i;
            break;
        }
	}
	return array.slice(0, firstElemThatIsNotAnimal);
}

// Remove non-animals without the need of sorting first
array.filter(function(item) {
	return animals.includes(item);
})
