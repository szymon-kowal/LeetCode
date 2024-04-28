/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let flag = 0;
    return function(...val) {
        if (flag == 0) {
            flag++;
            return fn(...val)
        } else {
            return undefined;
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
