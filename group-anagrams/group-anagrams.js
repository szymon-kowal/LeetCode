/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let container = {};
    let curr = '';
    for (let i = 0; i < strs.length; i++) {
        curr = strs[i].split('').sort().join('');
        if (container.hasOwnProperty(curr)) {
            container[curr].push(strs[i]);
        } else {
            container[curr] = [strs[i]];
        }
    }
    let answer = [];
    for (key in container) {
        answer.push(container[key])
    }
    return answer;
};