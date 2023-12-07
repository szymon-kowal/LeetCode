/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let numsSum = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        numsSum += nums[i];
        sum += i;
    }
    sum += nums.length;
    return (sum - numsSum);
};