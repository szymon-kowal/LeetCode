/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let squared = 0;
    if (x == 0) return 0;
    if (x == 1) return 1;
    for (let i = 1; i <= x; i++) {
        squared = i * i;
        if (squared > x) {
            return i - 1;
        }
    }
};