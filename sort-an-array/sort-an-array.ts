function sortHelper(left:number[], right:number[]):number[] {
    const output:number[] = [];
    while(left.length && right.length) {
        if (left[0] < right[0]) {
            output.push(left.shift());
        } else {
            output.push(right.shift());
        }
    }
    return [...output, ...left, ...right];
}



function sortArray(nums: number[]): number[] {
    if (nums.length === 1) {
        return nums
    }
    const middle:number = Math.floor(nums.length / 2);
    const left: number[] = sortArray(nums.slice(0, middle));
    const right:number[] = sortArray(nums.slice(middle));
    
    return sortHelper(left, right);
};