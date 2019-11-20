var arr = [1,3,5,4,6];


function sum (array){
	var sumAll;
	sumAll=0;
	for (var i = 0; i < array.length; i++){
		sumAll += array[i] ;
	}
	return sumAll;
}

function sumEven (array){
	var sumAll;
	sumAll=0;
	for (var i = 0; i < array.length; i++){
		if(array[i] % 2 == 0 ){
		sumAll += array[i] ;
		}
	}
	return sumAll;
}

function sumOdd (array){
	var sumAll;
	sumAll=0;
	for (var i = 0; i < array.length; i++){
		if(array[i] % 2 != 0 ){
		sumAll += array[i] ;
		}
	}
	return sumAll;
}