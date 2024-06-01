/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        const calc = target - nums[i];
        if (calc in hashMap) {
            return [hashMap[calc], i];
        } else {
            hashMap[nums[i]] = i;
        }
    }
    return [0, 0];
};