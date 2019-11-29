//1.
class Student {
	constructor(id, name, age, course, gender, grade){
		this.id = id;
		this.name = name;
		this.age = age;
		this.course = course; 
		this.gender = gender;
		this.grade = grade;
	}
}
//2.
var student1 = new Student(1, "Ivan", 21, 3, "male", 5.2);
var student2 = new Student(2, "Melani", 22, 4, "female", 3.6);
//3.
var students = [student1, student2];
//4.
console.log(students.toString());

//5.
function logStudent(array){
	students.forEach(function(student){
		console.log(student);
	});
}
logStudent(students);