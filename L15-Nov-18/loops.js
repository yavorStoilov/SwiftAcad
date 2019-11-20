/*
	Напишете програма, която проверява дали в един списък
	от числа, всички числа са четни
	
	• Използвайте всеки един от операторите за обхождане,
	като за всяко от решенията използвайте различна
	функция (forCheckEven(), doCheckEven(), whileCheckEven())
	
	• Пример:
		array = [2, 14, 6, 24, 8]
		forCheckEven(array) // => true
		array = [32, 44, 26, 9, 4]
		whileCheckEven(array) // => false
*/

function forCheckEven(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (typeof array[i] != 'number' || (arr[i] % 2) != 0) {
			return false;
        }
	}
	return true;
}

function doCheckEven(arr) {	
	var i = 0;
	do {
		if (typeof array[i] != 'number' || (arr[i] % 2) != 0) {
			return false;
        }
		i++;
	} while (i < arr.length);
	return true;
}

function whileCheckEven(arr) {	
	var i = 0;
	while (i < arr.length) {
		if (typeof array[i] != 'number' || (arr[i] % 2) != 0) {
			return false;
        }
		i++;
	}
	return true;
}
