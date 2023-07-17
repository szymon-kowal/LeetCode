/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let hashMapS = {};
    let hashMapT = {};
    if (s.length != t.length) {
        return false;
    }
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] in hashMapS){
            hashMapS[s[i]]++;
        } else {
            hashMapS[s[i]] = 1;
        }
        if (t[i] in hashMapT){
            hashMapT[t[i]]++;
        } else {
            hashMapT[t[i]] = 1;
        }
    }
    
    for (let key in hashMapS) {
        if (hashMapS[key] != hashMapT[key]) {
            return false;
        }
    }
    return true;
};