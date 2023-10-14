/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i].toString().split('')
        for (let j = 0; j < nums[i].length; j++) {
            nums[i][j] = parseInt(nums[i][j]);
            newArr.push(nums[i][j]);
        }
    }
    return newArr
};