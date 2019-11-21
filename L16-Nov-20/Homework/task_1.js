var allEmails = ['johndoe@hotmail.com', 'johndoe@abv.bg', 'johndoe@gmail.com', 'johndoe@mail.bg'] ;

function returnEmail (arr){
	var retunrEmails = [];
	var j = 0;
	str = '.com';
	for(var i=0; i<arr.length ; i++){
		if (arr[i].includes(str)){
			retunrEmails[j++] = arr[i];
		}
	}
	return retunrEmails.join(', ') ;
}
