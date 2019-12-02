
var arrayWords = ['ih','yas','esaelP'];

function reverseArr(arr){
   arr.reverse();
   for(var i=0 ; i<arr.length ; i++){
	   arr[i] = arr[i].split("").reverse().join(""); 
   }
   return arr.join(" ");
}
reverseArr(arrayWords);
