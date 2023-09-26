/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let container = {};
    for (let i = 0; i < nums.length; i++) {
        if (container.hasOwnProperty(nums[i])) {
            if ( Math.abs(container[nums[i]] - i) <= k) {
                return true;
            } else {
                container[nums[i]] = i;
            }
        } else {
            container[nums[i]] = i;
        }
    }
    return false;
};