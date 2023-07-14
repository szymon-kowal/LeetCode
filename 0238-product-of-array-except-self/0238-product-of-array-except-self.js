/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let arr = [];
    let left = 1;
    let right = 1;
    for (let i = 0; i < nums.length; i++) {
        arr[i] = left;
        left *= nums[i];
        
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        arr[i] *= right;
        right *= nums[i];
    }
    return arr;
};