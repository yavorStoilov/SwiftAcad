function checkIfNumber( a ){
    var result;
    if(isNaN(a)){       // if(typeof x == 'number')
        result = a + " is not a number.";
    }else{
        result = a + " is a number. ";
    }
    return result ; 
}
checkIfNumber(5);
checkIfNumber(NaN);
checkIfNumber("äbvck");

function checkIfNumber2 (x){
	return (typeof x =='number')
}

function checkIfNumber3(x){
	return (if(typeof x == 'number' && !isNaN(x)))