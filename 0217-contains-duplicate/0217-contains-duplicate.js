/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hashSet = {};
    for (let i = 0; i < nums.length ; i++) {
        if (nums[i] in hashSet) {
            return true;
        } else {
          hashSet[nums[i]] = true;  
        }
    }
    return false;
};