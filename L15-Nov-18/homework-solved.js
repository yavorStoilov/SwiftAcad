/*
Задача 1:
	Напишете 3 функции, които приемат като аргумент списък с числа и съответно:
	• Връща като резултат сумата от тези числа
	• Връща като резултат сумата само от четните числа
	• Връща като резултат сумата само от нечетните числа

	Примерен резултат:
		var array = [2, 1, 16, 3, 9];
		sum(array)      => 31
		sumEven(array)  => 18
		sumOdd(array)   => 13
*/

// Решение 1:
function sum(arr) {
	var result = 0;
	for (var i = 0; i < arr.length; i++) {
		result += arr[i];
	}
	return result;
}

function sumEven(arr) {
	var result = 0;
	for (var i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) == 0) {
			result += arr[i];
		}
	}
	return result;
}

function sumOdd(arr) {
	var result = 0;
	for (var i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) != 0) {
			result += arr[i];
		}
	}
	return result;
}

// Решение 2 (с Array.prototype.forEach):
function sumForEach(arr) {
	var result = 0;
	arr.forEach(function(el) {
		result += el;
	});
	return result;
}


/*
Бонус задача:
	Напишете функция, която приема като аргумент произволен масив и връща като резултат стойността на първия елемент от масива.
	Ако подадем втори параметър 'n' (число) на функцията, нека тя върне първите 'n' елемента на масива.

	Примерен резултат:
		var array = ['dog', 'cat', 'mouse', 'lizard', 'bird'];
		first(array)     => 'dog'
		first(array, 3)  => ['dog', 'cat', 'mouse']
*/

// Решение 1:
function first(arr, n) {
	var maxIterator = (n < arr.length) ? n : arr.length;

	if (n != undefined) {
		var arrOfN = [];
		for (var i = 0; i < maxIterator; i++) {
			arrOfN.push(arr[i]);	
		}
		return arrOfN;
	} else {
		return arr[0];
	}
}

// Решение 2:
function first(arr, n) {
	var result;

	if (n == undefined) {
		result = arr[0];
	} else if (n >= arr.length) {
		result = arr;
	} else {
		var arrOfN = [];
		for (var i = 0; i < n; i++) {
			arrOfN.push(arr[i]);	
		}
		result = arrOfN;
	}

	return result;
}

// Решение 3 (със Array.prototype.slice):
function firstWithSlice(arr, n) {
	if (n != undefined) {
		return arr.slice(0, n);
	} else {
		return arr[0];
	}
}
