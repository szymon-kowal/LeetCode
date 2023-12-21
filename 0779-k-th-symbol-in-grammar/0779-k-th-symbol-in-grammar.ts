const dfs = (n:number, k:number, rootVal:number) => {
    if (n===1) {
        return rootVal;
    }
    
    let numNodes = Math.pow(2, n-1);
    
    if (k > numNodes / 2) {
        let nextRootVal = (rootVal === 0) ? 1 : 0;
        return dfs(n - 1, k - (numNodes / 2), nextRootVal);
    } else {
        let nextRootVal = (rootVal === 0) ? 0 : 1;
        return dfs(n - 1, k, nextRootVal);
    }
}


function kthGrammar(n: number, k: number): number {
    return dfs(n, k, 0)
};