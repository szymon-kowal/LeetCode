/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    }
    const charS = s.split('');
    charS.sort();
    const charT = t.split('');
    charT.sort();
    
    for (let i = 0;i < charS.length; i++) {
        if (charS[i] !== charT[i]) {
            return false;
        }
    }
    return true;
};