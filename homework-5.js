
//Task1
function Hero(name, knownAs) {
    this.name = name;
    this.nickname = knownAs || name;
    this.kickAss = function (enemy) {
        // actions to kick the enemy's ass
        return (this.nickname + " " + "just kicked" + " " + enemy.name + "'s ass");
    };
    this.saveWorld = function () {
        // actions to save the world
        console.log("Once again " + this.nickname + " saved the world!");
    };
}

function BadGuy(name, knownAs) {
    this.name = name;
    this.nickname = knownAs || name;
}

var batman = new Hero("Bruce Wane", "Batman");
var joker = new BadGuy("Joker");
var hakan = new BadGuy("Hakan");
batman.kickAss(joker);

//Task2
function Student(name, surname, gender, facultyNumber, university, speciality) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.facultyNumber = facultyNumber;
    this.university = university;
    this.speciality = speciality;
}

var student1 = new Student("Dimitar", "Stoychev", "Male", 56432, "Sofia University", "Psychology");
var student2 = new Student("Daniela", "Mitrovska", "Female", 71543, "Sofia University", "Mathematics");

var students = [student1, student2];

function collectStudents() {
    students.toString();
}

function showStudents(array) {
    var result = [];
    array.forEach(function (allStudents) {
        result.push(JSON.stringify(allStudents));
    })
    return result.join(",");
}

