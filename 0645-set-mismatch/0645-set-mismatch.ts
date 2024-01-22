function findErrorNums(nums: number[]): number[] {
    
    const arrNum = new Array(nums.length + 1).fill(0);
    
    let missing = 0
    let duplicate = 0;

    for (const num of nums) {
        arrNum[num]++;
    }

    for (let i = 1; i < arrNum.length; i++) {
        if (arrNum[i] === 2) {
            duplicate = i;
        }
        if (arrNum[i] === 0) {
            missing = i;
        }
    }

    return [duplicate, missing];
};;