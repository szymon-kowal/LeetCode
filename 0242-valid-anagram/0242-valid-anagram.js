/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const hashMap = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (hashMap[char]) {
            hashMap[char]++;
        } else {
            hashMap[char] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        if (hashMap[char]) {
            hashMap[char]--;
            if (hashMap[char] === 0) {
                delete hashMap[char];
            }
        } else {
            return false;
        }
    }

    return Object.keys(hashMap).length === 0;
};