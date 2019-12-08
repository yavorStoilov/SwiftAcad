(function () {

    /*
    Задача 1:
        Намерете и изчистете грешките в кода.
        Започнете като изчистите синтактичните грешки, след това изпълнете кода в конзолата
        и проверете резултата. При нужда, използвайте debugger-а.
    */

    var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

    // function displayEvenNumbers(numbers) {
    //     var evenNumbers = {};
    //     for (var i = 0; i < numbers.length - 1; i++;) {
    //         if (numbers % 2 = 0) {
    //             ;
    //             evenNumbers.push(i);
    //         }
    //         return evenNumbers;
    //     }
    // }
    // displayEvenNumber();
    //New function
    function displayEvenNumbers2(numbers) {
        var evenNumbers = [];
        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 == 0) {
                evenNumbers.push(numbers[i]);
            }
        }
        return evenNumbers;
    }

    //Task 2
    // Задача 2:
    // 	Направете клас за колело Bike:
    // 		• Да съдържа свойства на колело (например brand, price, color, weight и т.н.)
    // 		• Да съдържа instance метод toHTML(), който да генерира представяне на свойствата на колелото в HTML формат
    // 	След това:
    // 		• Създайте списък с няколко колела-обекти, които са инстанции на класа Bike
    // 		• Изведете всички колела и техните свойства в свързана HTML страница
    // 	БОНУС:
    // 		• Задайте приятно оформление на резултата чрез CSS

    function Bike(brand, price, color, weight) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.weight = weight;


    }
    Bike.prototype.toHTML = function () {
        var list = document.createElement("section");
        document.body.appendChild(list);
        list.className = "Bike";
        var htmlBrand = document.createElement("p");
        list.appendChild(htmlBrand);
        htmlBrand.textContent = "Brand";
        htmlBrand.className = "brand";
        var htmlPrice = document.createElement("p");
        list.appendChild(htmlPrice);
        htmlPrice.textContent = "Price";
        htmlPrice.className = "price";
        var htmlColor = document.createElement("p");
        list.appendChild(htmlColor);
        htmlColor.textContent = "Color";
        htmlColor.className = "color";
        var htmlWeight = document.createElement("p");
        list.appendChild(htmlWeight);
        htmlWeight.textContent = "Weight";
        htmlWeight.className = "weight";
    }

    var bike1 = new Bike("asd", 200, "red", 23);
    var bike2 = new Bike("abd", 300, "white", 24);
    //bike1.toHTML();
    var bikes = [bike1, bike2];

    function showAllBikes(array) {
        array.forEach(function (bike) {
            for (var key in bike) {
                var parag = document.createElement("p");
                document.body.appendChild(parag);
                parag.textContent = key + ":", bike[key];
            }
        })
        //To be continued after 8-th December :) 
    }

    showAllBikes(bikes);
})();