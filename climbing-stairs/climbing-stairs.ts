function climbStairs(n: number): number {
    const memo = new Map<number, number>();
    function helper(n:number):number {
        if (n <= 2) {
            return n;
        } 
        if (memo.has(n)) {
            return memo.get(n);
        }
        
        const answer = helper(n - 1) + helper(n - 2);
        memo.set(n, answer);
        return answer;
    }
    
    return helper(n);
};