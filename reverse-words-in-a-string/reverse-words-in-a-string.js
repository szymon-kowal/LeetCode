/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(' ').filter(word => word.trim() !== '')
    console.log(s);
    let curr = '';
    for (let i = 0; i < s.length / 2; i++) {
        curr = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = curr;
    }
    s = s.join(' ');
    return s;
};