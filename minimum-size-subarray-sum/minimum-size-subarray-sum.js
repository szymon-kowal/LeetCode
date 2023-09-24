/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let start = 0;
    let end = 0;
    let sum = nums[0];
    let min_length = Infinity;
    while (start <= end && end < nums.length){
        if (sum >= target) {
            min_length = Math.min(min_length, end-start+1);
            sum -= nums[start];
            start++;
        } else {
            end++;
            sum += nums[end];
        }
    }
    return min_length === Infinity ? 0 : min_length;
};