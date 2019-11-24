//Task 1 - Second version 
//Filter function for task 1
function checkEmailAdress(list) {
    var str = ".com";
    return list.includes(str);
}

function emailAdressWithCom2(list) {
    var result= list.filter(checkEmailAdress);
    return result.join(", ")
}
//Task 2 - Second version

// Filter function for task 2
function checkAge(list) {
    return (list.age >= 18);

}
function personName(list){
    return list.name;
}
function onlyNameOfPerson2(list) {
    var result = list.filter(checkAge);
    var   allName = result.map(personName);
    return allName.join(", ")
  
}