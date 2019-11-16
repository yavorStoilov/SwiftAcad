/* Задача 1:
Напишете функция, която приема един входен параметър, проверява дали стойността му е от тип number и връща true или false.
Примерен резултат:
	checkIfNumber(4) => true
    checkIfNumber("ball") => false */

//Task 1
function checkIfNumber(parameter) {
    switch (typeof (parameter)) {
        case "number":
            return true;
        case "object":
            return "This parameter is object.Try with number please :)";
        case "boolean":
            return "This parameter is boolean.Try with number please :)";
        case "undefined":
            return "This parameter is undefined.Try with number please :)";
        case "symbol":
            return "This parameter is symbol.Try with number please :)";
        case "function":
            return "This parameter is function.Try with number please :)";
        case "bigint":
            return "This parameter is bigint.Try with number please :)";
        default:
            return false;
    }
}
//Task2
function area(a, b, c) {
    if ((typeof (a) == "number") && (typeof (b) == "number") && (typeof (c) == "number")) {
        if (a > 0 && b > 0 && c > 0) {
            if (b >= c) {
                return "b can't bigger or equal  than c.Try with other parameters"
            }
            var areaOfTriangle = a * b;
            var areaOfRectangle = (a * (c - b) / 2);
            var total = areaOfTriangle + areaOfRectangle;
            return total;
        }
        else {
            return "Input positive number please:)";
        }
    }
    else {
        return "This parameter/s isn't a number.Try with number please";
    }

}

// Бонус задача:
// Напишете функция, която приема два произволни string-a като входни параметри и връща като резултат разликата в броя символи на двата string-а. Резултатът никога не трябва да е отрицателно число.
// Примерен резултат:
// 	diff("football", "ball") => 4
//Bonus task
function diff(param1, param2) {
    if ((typeof (param1) == "string") || (typeof (param2 == "string"))) {
        var result;
        var firstStringLength = param1.length;
        var secondStringLegth = param2.length;
        if (firstStringLength >= secondStringLegth) {
            result = firstStringLength - secondStringLegth;
            return "Тhe difference between thе two strings is: " + (result);
        }
        else {
            "Difference between these strings are:"
            result = secondStringLegth - firstStringLength
            return "Тhe difference between thе two strings is: " + (result);
        }
    }
    else {
        console.log("This parameter isn't string");
    }
}