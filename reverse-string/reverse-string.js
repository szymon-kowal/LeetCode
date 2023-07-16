/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let swap = 'a';
    for (let i  = 0; i < s.length / 2; i++){
        swap = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = swap;
    }
    return s;
};