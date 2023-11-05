/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(goal.length !== s.length) return false 
    let str = s+s;
    return str.includes(goal)
};