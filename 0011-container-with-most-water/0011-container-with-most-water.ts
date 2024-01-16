function calculateArea(idxL:number, idxR: number, arr:number[]): number {
    return Math.min(arr[idxL],arr[idxR]) * (idxR - idxL);
}

function maxArea(height: number[]): number {
    let answer: number = 0;
    let leftIdx: number = 0;
    let rightIdx: number = height.length - 1;
    while (rightIdx >= leftIdx) {
        answer = Math.max(answer, calculateArea(leftIdx, rightIdx, height));
        if (height[leftIdx] < height[rightIdx]) {
            leftIdx++;
        } else {
            rightIdx--;
        }
    }
    return answer;
};