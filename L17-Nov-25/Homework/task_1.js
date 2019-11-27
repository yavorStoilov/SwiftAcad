
var arrayWords = ['ih','yas','esaelP'];

function reverseArr(arr){
	var reverseArray = [];
   arr.reverse();
   for(var i=0 ; i<arr.length ; i++){
	   var revEl = arr[i].split("").reverse().join("");
	   reverseArray.push(revEl);
   }
   return reverseArray.join(" ");
}
reverseArr(arrayWords);
