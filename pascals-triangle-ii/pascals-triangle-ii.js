/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let answer = [1];
    let temp = 1;
    for (let i = 1; i <= rowIndex; i++){
        temp = temp * (rowIndex - i + 1) / i;
        answer.push(temp)
    }    
    return answer;
};