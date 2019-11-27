// Задача 1 (продължение на exercise.js):
// 	Напишете функция, която да постига следното:
// 	reverseArray(["ih", "yas", "esaelP"]);
// 	Желан резултат: "Please say hi"


//Task 1
//Helper function for Task1
function reverseString(word) {
    return word.split("").reverse().join("");
}
// Задача 2:
// 	Напишете функция, която приема произволен списък от числа и
// 	подменя всички нечетни числа с тяхната стойност, умножена по 2.

// 	Примерен списък:   [4, 9, 7, 2, 1, 8]
// 	Примерен резултат: [4, 18, 14, 2, 2, 8]
//Task 2
function reverseWordInArray(words) {
    var result = words.join(" ");
    return reverseString(result);
}

function replaceOddNumbers(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            array[i] *= 2;
        }
    }
    return array;
}

// Бонус задача:
// 	Допълнете списъка така, че да съдържа числата от 0 до 7.

// 	Начален списък: [2, 3, 4]
// 	Желан резултат: [0, 1, 2, 3, 4, 5, 6, 7]
//Bonus task

function arrayWithSpecialNumbers(list) {
    //var arrayLength = list.length > 7  ? list.length : 8;
    var arrayLength=8;
    if(list.length==arrayLength)
    {
        return list;
    }
    var newArr=[];
    for (var i = 0; i < arrayLength; i++) {
       if(list[i]==i){
          newArr.push(list[i]);
       }
       newArr.push(i);
    }
    return newArr;
}