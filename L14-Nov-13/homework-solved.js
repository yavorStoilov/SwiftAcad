/*
Задача 1:
Напишете функция, която приема един входен параметър, проверява дали стойността му е от тип number и връща true или false.
Примерен резултат:
	checkIfNumber(4) => true
	checkIfNumber("ball") => false
*/

// Решение 1:
function checkIfNumber(x) {
	if (typeof(x) == "number") {
		return true;
	} else {
		return false;
	}
}

// Решение 2:
function checkIfNumber(x) {
    return (typeof(x) == "number") ? true : false;
}


/*
Задача 2:
Слайд номер 14 от презентацията
*/

// Решение:
function area(a, b, c) {
	if (typeof(a) != "number" ||
		typeof(b) != "number" ||
		typeof(c) != "number") {
		alert("There is a value that is not a number!");
	}

	var rectangle = a * b,
		triangle = a * (c - b) / 2;
	
	return rectangle + triangle;
}


/*
Бонус задача:
Напишете функция, която приема два произволни string-a като входни параметри и връща като резултат разликата в броя символи на двата string-а. Резултатът никога не трябва да е отрицателно число.
Примерен резултат:
	diff("football", "ball") => 4
*/

// Решение 1:
function diff(string1, string2) {
	var result;
	if (string1.length > string2.length) {
		result = string1.length - string2.length;
	} else {
		result = string2.length - string1.length;
	}
	
	return result;
}

// Решение 2:
function diff(string1, string2) {
	var result;
	result = Math.abs(string1.length - string2.length);
	
	return result;
}
