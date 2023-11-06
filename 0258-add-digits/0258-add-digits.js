/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce(function(sum, digit) {
            return sum + parseInt(digit, 10);
        }, 0);
    }
    return num;
}