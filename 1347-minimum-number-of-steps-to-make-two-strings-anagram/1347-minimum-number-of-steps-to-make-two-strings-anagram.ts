function minSteps(s: string, t: string): number {
    const sMap:Map<string, number> = new Map();
    const tMap:Map<string, number> = new Map();
    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i],sMap.get(s[i]) ? sMap.get(s[i]) + 1 : 1)
        tMap.set(t[i],tMap.get(t[i]) ? tMap.get(t[i]) + 1 : 1)
    }
    let count:number = 0;
    for (const [char, freq] of tMap) {
        const sFreq = sMap.get(char) || 0;
            if (freq > sFreq) {
                count += freq - sFreq;
            }
        }
    return count;
};