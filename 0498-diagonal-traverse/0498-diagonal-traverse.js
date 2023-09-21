/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let m = mat.length;
    let n = mat[0].length;
    console.log(m)
    console.log(n)
    if (m == 1) return mat[0];
    let storage = {}
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ((i+j) in storage) {
                storage[i+j].push(mat[i][j]);
            } else {
                storage[i+j] = [mat[i][j]]
            }
        }
    }
    let answer = [];
    let array = [];
    for (const key in storage) {
      if (parseInt(key) % 2 == 0) {
            array = storage[key].reverse();
        } else {
            array = storage[key];
        }
        answer = answer.concat(array);
    }
    return answer;
};