function shuffle(nums: number[], n: number): number[] {
    const answer:number[] = [];
    for (let i = 0; i < n; i++){
        answer.push(nums[i]);
        answer.push(nums[n+i])
    }
    return answer;
};