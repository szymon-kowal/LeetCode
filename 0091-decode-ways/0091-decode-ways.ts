function numDecodings(s: string): number {
    const dp: number[] = Array(s.length + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] === '0' ? 0 : 1;
    
    for (let i = 2; i < s.length + 1; i++) {
        const twoNums = Number(s.substring(i-2 , i));
        if (Number(s.substring(i - 1, i)) > 0)
            dp[i] += dp[i - 1];
        if (twoNums > 9 && twoNums < 27)
            dp[i] += dp[i - 2];
    }
    return dp[dp.length - 1];
}
