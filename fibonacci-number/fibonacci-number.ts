

function fib(n: number): number {
    const memo: Map<number, number> = new Map();
    function helper(n:number):number {
        if (n <= 1) {
            return n;
        }
        if (memo.has(n)){
            return memo.get(n);
        }
        const result = helper(n-1) + helper(n-2);
        
        return result;
    }
    return helper(n);
};