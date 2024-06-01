/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const mySet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (mySet.has(nums[i])) {
            return true;
        } else {
            mySet.add(nums[i]);
        }
    }
    return false;
};