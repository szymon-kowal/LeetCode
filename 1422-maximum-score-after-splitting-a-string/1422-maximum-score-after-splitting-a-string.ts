function maxScore(s: string): number {
    const str:string[] = s.split('');
    let max:number = 0;
    for (let i = 1; i < str.length; i++) {
        let left:number = 0;
        let right:number = 0;
        for (let j = 0; j < i; j++) {
            if (str[j] === '0') {
                left++;
            }
        }
        for (let k = i; k < str.length; k++){
            if(str[k] === '1') {
                right++;
            }
        }
        if ((left + right) > max) {
            max = left + right;
        }
    }
    return max;
};