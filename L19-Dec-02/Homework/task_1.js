var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
function displayEvenNumbers(arr) {
    var evenNumbers = [];
    for (var i=0 ; i < arr.length ; i++) {
        if (arr[i] % 2 == 0) {
        	evenNumbers.push(arr[i]);
		}
    }
	return evenNumbers;
}
displayEvenNumbers(numbers); 