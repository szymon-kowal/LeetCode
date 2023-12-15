function findTargetSumWays(nums: number[], target: number): number {
    
    let count = 0;
    
    function dfs(i:number, cur: number) {
        if (i === nums.length) {
            if (cur === target) {
                count++;
            }
            return;
        }
        const num = nums[i];
        
        dfs(i + 1, cur - num);
        dfs(i + 1, cur + num);
    }
    
    dfs(0, 0)
    
    return count;
};