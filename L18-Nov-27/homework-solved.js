/*
Задача 1:
	слайд 44 от презентацията
*/

function Hero(name, knownAs) {
	this.name = name;
	this.nickname = knownAs || name;
	this.saveWorld = function () {
		// actions to save the world
		console.log("Once again " + this.nickname + " saved the world!");
	};
}

function BadGuy(name, knownAs) {
 this.name = name;
 this.nickname = knownAs || name;
}

var superman = new Hero("Clark Kent", "Superman");
var joker = new BadGuy("Joker");

Hero.prototype.kickAss = function (enemy) {
	console.log(this.nickname + " just kicked " + enemy.nickname + "'s ass.");
};

superman.saveWorld();
superman.kickAss(joker);


/*
Задача 2:
	1. Създайте клас Student като помислите
	какви характеристики (полета) може да има този клас

	2. Създайте 2 инстанции от този клас

	3. Създайте масив students и вкарайте в него
	двете инстанции на класа Student

	4. Съберете двата елемента на масива в един String
	Очакван резултат: "[object Object],[object Object]"

	5 (БОНУС). Намерете начин да покажете обектите като текст
	Очакван резултат: "{name:"john",age:17},{name:"maya",age:21}"
*/

var studentsArray = [];
studentsArray.push(superman, joker);

var studentsArrayAsString = '';
studentsArray.forEach(function(student) {
	studentsArrayAsString += JSON.stringify(student);
});
console.log(studentsArrayAsString);
