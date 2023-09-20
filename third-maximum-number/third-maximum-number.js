/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let third = Number.NEGATIVE_INFINITY;
    let second = Number.NEGATIVE_INFINITY;
    let first = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > first) {
            third = second;
            second = first;
            first = nums[i];
        } else if (nums[i] > second && nums[i] < first) {
            third = second;
            second = nums[i];
        } else if (nums[i] > third && nums[i] < second) {
            third = nums[i];
        }
    }
    console.log(first);
    console.log(second);
    console.log(third);
    if (third != Number.NEGATIVE_INFINITY) {
        return third;
    } else {
        return first;
    }
};