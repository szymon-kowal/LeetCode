function buildArray(nums: number[]): number[] {
    const answer: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        answer.push(nums[nums[i]]);
    }
    return answer;
};