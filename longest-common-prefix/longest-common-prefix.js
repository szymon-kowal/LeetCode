/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    for (let i = 0; i < strs.length; i++) {
        strs[i] = strs[i].split('');
    }
    let answer = "";

    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return answer;
            }
        }
        answer += char;
    }
    return answer; 
};