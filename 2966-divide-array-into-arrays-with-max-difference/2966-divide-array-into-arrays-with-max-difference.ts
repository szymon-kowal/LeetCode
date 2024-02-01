function divideArray(nums, k) {
    nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 2; i < nums.length; i += 3) {
        if (nums[i] - nums[i - 2] > k) {
            return [];
        }
        result.push([nums[i - 2], nums[i - 1], nums[i]]);
    }
    return result;
};