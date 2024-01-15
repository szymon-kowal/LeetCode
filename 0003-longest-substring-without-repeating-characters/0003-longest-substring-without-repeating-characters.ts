function lengthOfLongestSubstring(s: string): number {
    if (s.length == 0) return 0;
    if (s.length == 1) return 1;
    const strSet:Set<string> = new Set();
    let left = 0;
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        while(strSet.has(s[i])) {
            strSet.delete(s[left]);
            left++;
        }
        strSet.add(s[i]);
        answer = Math.max(answer, i - left + 1)
    }
    return answer;
}