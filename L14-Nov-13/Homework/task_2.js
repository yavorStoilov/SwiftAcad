function area (a, b, c){
    var result;
    if(isNaN(a) || isNaN(b) || isNaN(c)){
        result = "Invalid input!";
	}else{
		if(b>c){
			result = "Ïnvalid height!"
		}else{
		result = (a*b)+(a*(c-b)/2);
		}
	}
	return result;
}
 area(10,6,10); // 80;
 area(10,20,10); //invalid height;
 area(a,10 , 15); //invalid input;
		