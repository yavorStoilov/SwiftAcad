// Задача 1:
// 	Напишете 3 функции, които приемат като аргумент списък с числа и съответно:
// 	• Връща като резултат сумата от тези числа
// 	• Връща като резултат сумата само от четните числа
// 	• Връща като резултат сумата само от нечетните числа

// 	Примерен резултат:
// 		var array = [2, 1, 16, 3, 9];
// 		sum(array)      => 31
// 		sumEven(array)  => 18
// 		sumOdd(array)   => 13
function sum(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] != "number") {
            return "Invalid input.Please input only numbers."
        }
        result += array[i];
    }
    return result;
}
function sumEven(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] != "number") {
            return "Invalid input.Please input only numbers.";
        }
        else if (array[i] % 2 == 0) {
            result += array[i];
        }

    }
    return result;
}
function sumOdd(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] != "number") {
            return "Invalid input.Please input only numbers.";
        }
        else if (array[i] % 2 != 0) {
            result += array[i];
        }

    }
    return result;
}
// Бонус задача:
// 	Напишете функция, която приема като аргумент произволен масив и връща като резултат стойността на първия елемент от масива.
// 	Ако подадем втори параметър 'n' (число) на функцията, нека тя върне първите 'n' елемента на масива.

// 	Примерен резултат:
// 		var array = ['dog', 'cat', 'mouse', 'lizard', 'bird'];
// 		first(array)     => 'dog'
// 		first(array, 3)  => ['dog', 'cat', 'mouse']

//Task 2
function first(array, n) {
    for (var i = 0; i < array.length; i++) {
        if ((n > 0)) {
            if (n > array.length) {
                return "Parameter can't bigger than array length."
            }
            return array.slice(0, n);
        }
        else if (n < 0) {
            return "Parameter can't negative number";
        }
        else {
            return array[0];
        }
    }
}