/*
Задача 1:
	Намерете и изчистете грешките в кода.
	Започнете като изчистите синтактичните грешки, след това изпълнете кода в конзолата
	и проверете резултата. При нужда, използвайте debugger-а.
*/

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
function displayEvenNumbers(numbers) {
    var evenNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
        	evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(numbers); // should return [2, 4, 6, 8]

// поправеният код:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
function displayEvenNumbers(numbers) {
    var evenNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
        	evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}


/*
Задача 2:
	Направете клас за колело Bike:
		• Да съдържа свойства на колело (например brand, price, color, weight и т.н.)
		• Да съдържа instance метод toHTML(), който да генерира представяне на свойствата на колелото в HTML формат
	След това:
		• Създайте списък с няколко колела-обекти, които са инстанции на класа Bike
		• Изведете всички колела и техните свойства в свързана HTML страница
	БОНУС:
		• Задайте приятно оформление на резултата чрез CSS
*/

function Bike(brand, color, price, weight) {
	this.brand = brand;
	this.color = color;
	this.price = price;
	this.weight = weight;

	this.toHTML = function() {
		var header = "<h1 class=\"brand\"><span style=\"background:" + this.color + "\"></span>" + this.brand + "</h1>";
		var body = `<div>
						<p>price: ` + this.price + ` $</p>
						<p>weight: ` + this.weight + ` kg</p>
					</div>`;
		return header + body;
	}
}

var bmx = new Bike("BMX", "red", 300, 12);
var drag = new Bike("Drag", "blue", 600, 15);

var bikesArray = [bmx, drag];

// ако имаме html страница съдържаща <div id="container"></div> :
var container = document.querySelector("#container");
bikesArray.forEach(function(bike) {
	container.innerHTML += bike.toHTML();
});
