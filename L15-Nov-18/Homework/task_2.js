function func1 (array){
			return array[0];
}

function func2 (array , count){
	if(count > array.length || count < 1 ){
		console.log("Invalid count!Please enter a count between 1 and the length of array.")
	}else
	for(var i=0; i<count; i++){
		console.log(array[i]);
	}
}
