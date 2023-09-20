/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    nums.forEach(n => {
        const index = Math.abs(n) - 1
        if (nums[index] > 0) {
            nums[index] = nums[index] * -1;
        }
    })

    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            arr.push(i + 1)
        }
    }
    return arr;
};