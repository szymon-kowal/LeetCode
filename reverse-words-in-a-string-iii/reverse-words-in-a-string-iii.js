/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(' ');
    let word = '';
    let current = '';
    for (let i = 0; i < s.length; i++) {
        word = s[i].split('')
        current = ''
        for (let j = 0; j < word.length / 2; j++) {
            current = word[word.length - 1 - j];
            word[word.length - 1 - j] = word[j];
            word[j] = current;
        }
        s[i] = word.join('');
    }
    s = s.join(' ');
    return s;
};