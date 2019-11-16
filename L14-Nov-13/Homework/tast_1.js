function checkIfNumber( a ){
    var result;
    if(isNaN(a)){
        result = a + " is not a number.";
    }else{
        result = a + " is a number. ";
    }
    return result ; 
}
checkIfNumber(5);
checkIfNumber(NaN);
checkIfNumber("äbvck");