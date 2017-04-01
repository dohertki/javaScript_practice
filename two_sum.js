/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var number = [];
    var outer = 0;
    while(outer < nums.length){
    for(var count = outer + 1; count < nums.length; count++){
        if(nums[outer] + nums[count] == target){
            number.push(outer);
            number.push(count);
            return number;
            
        }   
    }
    outer++;
    }
    
};
