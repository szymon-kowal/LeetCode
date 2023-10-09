/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let curr1 = 0;
    let curr2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > curr1) {
            curr2 = curr1;
            curr1 = nums[i];
        } else if (nums[i] > curr2) {
            curr2 = nums[i];
        }
    }
    return (curr1 - 1) * (curr2 - 1);
};