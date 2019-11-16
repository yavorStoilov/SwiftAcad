function numbercheck (input) {
    if(isNaN(input)){
        return "false";
     }else{
        return "true";
     }
}
function area (a,b,c){
    var rectangle = a*b;
    var triangle = (a/2*(c-b))/2;
    var totalarea = rectangle + triangle*2;
    return totalarea;
}
function bonus (inputA, inputB){
    var diff = inputA.length-inputB.length;
    return Math.abs(diff);
}