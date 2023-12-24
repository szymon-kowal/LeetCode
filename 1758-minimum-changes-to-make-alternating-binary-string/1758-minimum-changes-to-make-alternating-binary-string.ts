function minOperations(s: string): number {
    const sArr: string[] = s.split('');
    let answer:number = 0;
    for (let i = 0; i < sArr.length; i++) {
        if (i % 2 === 0) {
            if (s[i] === "1") {
                answer++;
            }
        } else {
            if (s[i] === "0") {
                answer++;
            }
        }
    }
    return Math.min(answer, sArr.length - answer)
};