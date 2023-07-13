/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let res = {}; 
    for(let s of strs) {

        let count = new Array(26).fill(0); 
        for(let c of s) {
            count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
        }
        let commaSeparatedCount = count.join(",");
        if(commaSeparatedCount in res) {
            res[commaSeparatedCount].push(s)
        } else {
            res[commaSeparatedCount] = [s];
        }
    }
    return Object.values(res);
}