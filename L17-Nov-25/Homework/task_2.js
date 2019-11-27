//reshenie_1
var arr = [4,9,7,2,1,8];
function func (arr){
	for(var i=0; i<arr.length; i++){
		if(arr[i]%2!=0){
		  arr[i]=arr[i]*2;
		}
	}
	return arr ;
}
func(arr);

//reshenie_2
var arr = [4,9,7,2,1,8];
function func_2 (arr){
	arr.forEach(function(){
		if(arr[i]%2!=0){
		  arr[i]=arr[i]*2;
		}
	});
	return arr ;
}