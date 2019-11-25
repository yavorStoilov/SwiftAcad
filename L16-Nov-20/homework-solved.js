/*
Задача 1:
	За произволен списък с имейл адреси, накарайте конзолата да изпише като текст само тези, които завършват с '.com'.

	Примерен списък: ['johndoe@hotmail.com', 'johndoe@abv.bg', 'johndoe@gmail.com', 'johndoe@mail.bg'] 
	Примерен резултат: johndoe@hotmail.com johndoe@gmail.com
*/

// Решение 1:
function printOnlyDotCom(arr) {
	var arrayTwo = [];
	arr.forEach(function(item) { // could be solved with '.filter()' also
		if (item.slice(-4) == '.com') { // 'if (item.endsWith('.com'))' also possible
			arrayTwo.push(item);
		}
	});
	return arrayTwo.join(', ');
}

// Решение 2:
function doesItEndWithDotCom(word) {
	return word.endsWith('.com');
}

function printOnlyDotCom(arr) {
	var arrayTwo = arr.filter(doesItEndWithDotCom);
	return arrayTwo.join(', ');
}


/*
Задача 2:
	За произволен списък от обекти, състоящи се от име и възраст на човек, накарайте конзолата да изпише като текст само имената на хората, които са на възраст 18+.

	Примерен списък: [{ name: 'John', age: 27 },
					  { name: 'Nick', age: 18 },
					  { name: 'Abby', age: 16 },
					  { name: 'Bob', age: 46 }]
	Примерен резултат: John Nick Bob
*/

// Решение 1:
function printNamesOnlyAbove18(arr) {
	return arr.filter(person => person.age >= 18)
			  .map(person => person.name)
			  .join(", ");
}

// Решение 2:
function namedFilter(person) {
	if (person.age >= 18) {
		return person;
	}
}

function printNamesOnlyAbove18Two(arr) {
	var newArr;
	newArr = arr.filter(namedFilter);
	newArr = newArr.map(function(person) {
		return person.name;
	});
	newArr = newArr.join(", ");
	return newArr;
}

// Частично решение 3 за филтриране:
var anotherNewArr = [];
for (var i = 0; i < arr.length; i++) {
	if (arr[i].age >= 18) {
		anotherNewArr.push(arr[i].name);
	}
}


/*
Бонус: Модифицирайте задача 1 и 2, така че имейлите и имената да бъдат отделени със запетая, независимо колко са на брой.
	Задача 1: johndoe@hotmail.com, johndoe@gmail.com
	Задача 2: John, Nick, Bob

Решение: В горните решения вече е имплементирано -> .join(', ')
*/
