/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let map = new Map();
    let count = 0;
    for (let k = 0; k < nums3.length; k++) {
        for (let l = 0; l < nums4.length; l++) {
            map.set(nums3[k] + nums4[l],(map.has(nums3[k] + nums4[l]) ? map.get(nums3[k] + nums4[l]): 0) + 1)
        }
    }
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            count += (map.has(-(nums1[i] + nums2[j])) ? map.get(-(nums1[i] + nums2[j])) : 0);
        }
    }
    return count;
};