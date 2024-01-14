function twoSum(nums: number[], target: number): number[] {
    const numsMap: Map<number, number> = new Map();
    const answer:number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (numsMap.has(target - nums[i])) {
            return [i, numsMap.get(target - nums[i])]
        } else {
            numsMap.set(nums[i], i);
        }
    }
};