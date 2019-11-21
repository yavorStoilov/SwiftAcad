var list = [{ name: 'John', age: 27 }, { name: 'Nick', age: 18 }, { name: 'Abby', age: 16 },  { name: 'Bob', age: 46 }];

function check (arr) {
        var listName = [];
		var j=0;
	for(var i=0 ; i<arr.length ; i++){
		if (arr[i].age >= 18){
			listName[j++] = arr[i].name;
		}
	} 
   return listName.join(', ');	
}