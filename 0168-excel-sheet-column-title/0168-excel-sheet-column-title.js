/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let ans = ''

    while (columnNumber > 0) {
        let number = (--columnNumber) % 26;
        ans = String.fromCharCode(number + 65) + ans;
        columnNumber = (columnNumber - number)/26
    }
    
    return ans
};