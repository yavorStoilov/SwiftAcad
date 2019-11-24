// Задача 1:
// 	За произволен списък с имейл адреси, накарайте конзолата да изпише като текст само тези, които завършват с '.com'.

// 	Примерен списък: ['johndoe@hotmail.com', 'johndoe@abv.bg', 'johndoe@gmail.com', 'johndoe@mail.bg'] 
// 	Примерен резултат: johndoe@hotmail.com johndoe@gmail.com

function emailAdressWithCom(list) {
    var result = "";
    var str = ".com";
    for (var i = 0; i < list.length; i++) {
        if (list[i].includes(str)) {
            result += list[i] + ", ";
        }
    }
    return result.slice(0, result.length - 1);
}


// Задача 2:
// 	За произволен списък от обекти, състоящи се от име и възраст на човек, накарайте конзолата да изпише като текст само имената на хората, които са на възраст 18+.

// 	Примерен списък: [{ name: 'John', age: 27 },
// 					  { name: 'Nick', age: 18 },
// 					  { name: 'Abby', age: 16 },
// 					  { name: 'Bob', age: 46 }]
// 	Примерен резултат: John Nick Bob
function onlyNameOfPerson(list) {
    var result = "";
    for (var i = 0; i < list.length; i++) {
        if (list[i].age >= 18) {
            result += list[i].name + ", ";
        }
    }
    return result.slice(0, result.length - 2);
}