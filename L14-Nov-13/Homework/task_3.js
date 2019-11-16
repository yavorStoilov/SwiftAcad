"use strict";
function compareString(str1, str2){
    var result;
    if(str1.length >= str2.length){
        result = "Разликата е  " + (str1.length - str2.length);
    }else{
        result = "Разликата е " + (str2.length - str1.length);
    }
    return result;
}
compareString("котка", "куче");
compareString("куче", "котка");