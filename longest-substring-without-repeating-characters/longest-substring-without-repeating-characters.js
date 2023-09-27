/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    if (s.length === 1) return 1;
    let set = new Set(s[0]);
    let max = 0;
    let l = 0, r = 1;
    
    while(r < s.length){
        if(!set.has(s[r])){
            set.add(s[r]);
            r++;
            max = Math.max(max,r - l);
        } else{
            set.delete(s[l])
            l++;
            set.add([s[r]])
        }
    }
    
    return max;
};