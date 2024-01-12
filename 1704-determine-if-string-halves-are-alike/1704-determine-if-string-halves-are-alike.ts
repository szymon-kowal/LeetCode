const vowels:Set<string> = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

function halvesAreAlike(s: string): boolean {
    const sArr = s.split('');
    let l = 0;
    let r = 0;
    for (let i = 0; i < sArr.length / 2; i++) {
        if (vowels.has(sArr[i])) {
            l++;
        }
        if (vowels.has(sArr[sArr.length / 2 + i])) {
            r++;
        }
    }
    
    return l == r;
};