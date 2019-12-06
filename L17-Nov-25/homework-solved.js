/*
Задача 1 (продължение на exercise.js):
	Напишете функция, която да постига следното:
	reverseArray(["ih", "yas", "esaelP"]);
	Желан резултат: "Please say hi"
*/

// Решение 1:
function reverseArray(arr) {
	var result = [];
	arr.forEach(function(el) {
		var temp = reverseWord(el);
		result.push(temp);
	})
	return result.reverse().join(" ");
}

// Решение 2:
function reverseArray(arr) {
	return reverseWord(arr.join(" "));
}


/*
Задача 2:
	Напишете функция, която приема произволен списък от числа и
	подменя всички нечетни числа с тяхната стойност, умножена по 2.
	
	Примерен списък:   [4, 9, 7, 2, 1, 8]
	Примерен резултат: [4, 18, 14, 2, 2, 8]
*/

function randomFunction(arr) {
	return arr.map(function(el) {
		return (el % 2 > 0) ? el * 2 : el;
	});
}


/*
Бонус задача:
	Допълнете списъка така, че да съдържа числата от 0 до 7.

	Начален списък: [2, 3, 4]
	Желан резултат: [0, 1, 2, 3, 4, 5, 6, 7]
*/

var initialArray = [2, 3, 4];
var array1 = [0, 1];
var array2 = [5, 6, 7];

// Решение 1:
array1.concat(initialArray).concat(array2);

// Решение 2:
initialArray.unshift(0, 1);
initialArray.push(5, 6, 7);
