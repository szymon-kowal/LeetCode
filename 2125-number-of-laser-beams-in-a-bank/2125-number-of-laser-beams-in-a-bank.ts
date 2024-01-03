function numberOfBeams(bank: string[]): number {
    const answer:number[] = [];
    for (let i = 0; i < bank.length; i++) {
        let rowNum:number = 0;
        for (let j = 0; j < bank[i].length; j++) {
            if (bank[i][j] === '1') {
                rowNum++;
            }
        }
        if (rowNum !== 0 ) answer.push(rowNum);
    }
    let output:number = 0;
    for (let i = 1; i < answer.length; i++) {
        output += answer[i - 1] * answer[i];
    } 
    return output;
};
