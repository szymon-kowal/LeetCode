/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    haystack = haystack.split('');
    needle = needle.split('');
    let index = 0;
    
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[0]) {
            index = i;
            let count = 1;
            for (let j = 1; j < needle.length; j++) {
                if (haystack[i + j] == needle[j]) {
                    count++;
                } else {
                    break; 
                }
            }
            if (count == needle.length) {
                return index;
            }
        }
    }
    return -1;
};