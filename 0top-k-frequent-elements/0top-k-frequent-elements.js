/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let cont = {};
    for (let i = 0; i < nums.length; i++) {
        if (cont.hasOwnProperty(nums[i])) {
            cont[nums[i]]++;
        } else {
            cont[nums[i]] = 1;
        }
    }
    
    const keyValueArray = Object.entries(cont);
    keyValueArray.sort((a, b) => b[1] - a[1]);
    const nLargest = keyValueArray.slice(0, k);
    const result = [];
    for (const [key, value] of nLargest) {
        result.push(key);
    }

    return result;
};