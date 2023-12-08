/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    const reversed1 = num.toString().split('').reverse().join('');
    const reversed2 = parseInt(reversed1, 10).toString().split('').reverse().join('');

    return parseInt(reversed2, 10) === num;
};