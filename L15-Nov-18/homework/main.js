// Task 1

var array = [2, 1, 16, 3, 9];
//		sum(array)      => 31
//		sumEven(array)  => 18
//		sumOdd(array)   => 13
        
function sum(array) {
    let sum = 0;
    array.forEach(function(element) {
        sum += element;
    });
    return sum;
};

function sumEven(array) {
    let sum = 0;
    array.forEach(function(element) {
        if(element % 2 == 0) {
            sum += element;
        }
    });
    return sum;
}

function sumOdd(array) {
    let sum = 0;
    array.forEach(function(element) {
        if(element % 2 != 0) {
            sum += element;
        }
    });
    return sum;
}
// Task 2

var array2 = ['dog', 'cat', 'mouse', 'lizard', 'bird'];
//		first(array)     => 'dog'
//      first(array, 3)  => ['dog', 'cat', 'mouse']
        
function first(array, n){
    if(array.length == 0){
        return 0;
    }
    if(n == null) {
        return array[0];
    } else{
        return array.slice(0, n);
    }
};       