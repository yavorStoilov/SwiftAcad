var allEmails = ['johndoe@hotmail.com', 'johndoe@abv.bg', 'johndoe@gmail.com', 'johndoe@mail.bg'] ;

function returnEmail (arr){
	var retunrEmails = [];
	var j = 0;
	str = '.com';
	for(var i=0; i<arr.length ; i++){
		if (arr[i].includes(str)){    // if(arr[i].slice(-4)=='.com')  arr[i].endsWith('.com')
			retunrEmails[j++] = arr[i];
		}
	}
	return retunrEmails.join(', ') ;
}
