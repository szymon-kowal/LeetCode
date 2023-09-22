/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr = [];
    for (let i = 1; i <= numRows; i++) {
        let row = [];
        for (let j = 0; j < i; j++) {
            if (i - 2 >= 0 && j - 1 >= 0 && arr[i - 2][j - 1] && arr[i - 2][j] ) {
                let number = arr[i - 2][j - 1] + arr[i - 2][j];
                row.push(number);
            } else {
                row.push(1);
            };
        }
        arr.push(row);
    }
    return arr;
};