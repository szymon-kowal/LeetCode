/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    num = num.toString().split('').map(Number).sort((a,b) => (a - b));
    return (parseInt(num[0] + '' + num[2]) + parseInt(num[1] + '' + num[3]))
    
};