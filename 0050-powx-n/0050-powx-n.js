/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (x===1) return 1;
    if (x===-1) return n % 2 === 0 ? -x: x;
    let res = 1;
    let absN = Math.abs(n);
    for(let i = 0; i< absN; i++) {
        res *= x
    };
    return n < 0 ? 1 / res :res;
};