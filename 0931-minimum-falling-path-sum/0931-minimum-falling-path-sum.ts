function checkPath(currRow: number, currCol: number, matrix: number[][], memo: (number | null)[][]): number {
    if (currRow === matrix.length - 1) {
        return matrix[currRow][currCol];
    }

    if (memo[currRow][currCol] !== null) {
        return memo[currRow][currCol];
    }

    let minSum = Infinity;
    for (let i = -1; i <= 1; i++) {
        const nextCol = currCol + i;
        if (nextCol >= 0 && nextCol < matrix[0].length) {
            minSum = Math.min(minSum, matrix[currRow][currCol] + checkPath(currRow + 1, nextCol, matrix, memo));
        }
    }

    memo[currRow][currCol] = minSum;
    return minSum;
}

function minFallingPathSum(matrix: number[][]): number {
    let minSum = Infinity;
    let memo = Array(matrix.length).fill(null).map(() => Array(matrix[0].length).fill(null));
    
    for (let i = 0; i < matrix[0].length; i++) {
        minSum = Math.min(minSum, checkPath(0, i, matrix, memo));
    }

    return minSum;
}
