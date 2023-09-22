/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let m = matrix.length       // - columns
    let n = matrix[0].length    // - rows
    let right = n - 1;
    let left = 0;
    let top = 0;
    let down = m - 1;
    
    let answer = [];
    while (right >= left && top <= down){
        for (let i = left; i <= right; i++) {
            answer.push(matrix[top][i])
        }
        top++;
        
        for (let i = top; i <= down; i++) {
            answer.push(matrix[i][right]);
        }
        right--;
        
        if (top <= down) {
            for (let i = right; i >= left; i--) {
                answer.push(matrix[down][i]);
            }
            down--;
        }
        if (left <= right) {
            for (let i = down; i >= top; i--) {
                answer.push(matrix[i][left]);
            }
            left++;
        }
    }
    return answer;
};