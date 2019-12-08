(function () {
    "use strict"

    // Задача 1:
    // Напишете скрипт, който да извежда следните 2 заглавия в
    // една html страница (под заглавия разбирайте heading тагове):
    // • "PAGE DOM LOADED" - при настъпване на DOMContentLoaded събитието
    // • "PAGE BOM LOADED" - при window.onload
    // Направете обработка на събитието клик (където и да е върху страницата),
    // като изписвате текста "click captured: х<position>, y<position>"),
    // където position са съответно координатите (X и Y), където е кликнато.

    document.addEventListener("DOMContentLoaded", function () {
        var dom = document.createElement("h1");
        document.body.appendChild(dom);
        dom.textContent = "PAGE DOM LOADED";
    })


    window.onload = function () {
        var bom = document.createElement("h1");
        document.body.appendChild(bom);
        bom.textContent = "PAGE BOM LOADED"
    }

    document.addEventListener("click", function (event) {
        var click = document.createElement("p");
        document.body.appendChild(click);
        click.id = "coor";
        var x = event.clientX;
        var y = event.clientY;
        var coor = document.getElementById("coor");
        var coordinates = "Click captured:  " + " " + "x coords: " + x + ", y coords: " + y;
        coor.textContent = coordinates;
        coor.style.color = "red";
    })


    // Задача 2 (да си припомним малко и от стария материал):
    // Напишете функция, която приема като входен параметър масив от strings
    // и подрежда масивът във възходящ ред по дължината на тези strings.

    // Примерен резултат:
    // 	["banana", "kiwi", "strawberry", "ice"] =>
    // 	["ice", "kiwi", "banana", "strawberry"]

    function sortArray(arr) {
        return arr.sort(compare);
    }

    function compare(str1, str2) {
        if (str1.length > str2.length) {
            return 1;
        }
        else {
            return -1;
        }
        return 0;

    }
    var array = ["abd", "banana", "kiwi", "strawberry", "ice", "abc"];
    console.log(sortArray(array));
})();