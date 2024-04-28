/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let answerInit = init;
    for (let i = 0; i < nums.length; i++) {
        answerInit = fn(answerInit, nums[i]);
    }
    return answerInit;
};