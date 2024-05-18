/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    s = s.split('');
    oneMax = 0;
    zeroMax = 0;
    oneCurr = 0;
    zeroCurr = 0;
    for(let i = 0; i < s.length; i++) {
        if (s[i] == "1") {
            oneCurr++;
            if (oneCurr > oneMax) {
                oneMax = oneCurr;
            }
            zeroCurr = 0;
        } else {
            zeroCurr++;
            oneCurr = 0;
            if (zeroCurr > zeroMax) {
                zeroMax = zeroCurr;
            }
        }
    }
    return oneMax > zeroMax;
};