var nums = [12, 13, 44, 45]

function checkIfEven(nums){
    var i = 0;
    while (i < nums.length - 1){
        if(nums[i] % 2 != 0){
            return false;
        }
    i++;
    }

}

