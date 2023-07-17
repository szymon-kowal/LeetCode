/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hashMap = {};
    for (let i = 0; i < s.length; i++) {
        if (s[i] in hashMap){
            hashMap[s[i]][0]++;
        } else {
            hashMap[s[i]] = [1,i];
        }
    }
    for (let key in hashMap) {
        if (hashMap[key][0] == 1) {
            return hashMap[key][1];
        }
    }
    return -1;
};