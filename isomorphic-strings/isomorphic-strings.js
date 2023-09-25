/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapST = {};
    let mapTS = {};
    let s1 = '';
    let t1 = ''
    for (let i = 0; i < s.length; i++){
        s1 = s[i];
        t1 = t[i];
        if ((s1 in mapST && mapST[s1] !== t1) || (t1 in mapTS && mapTS[t1] !== s1)) {
            return false;
        } else {
            mapST[s1] = t1;
            mapTS[t1] = s1;
        }
    }
    return true;
};