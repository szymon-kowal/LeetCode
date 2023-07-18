/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let str = '';
    for (let i = 0; i < s.length; i++){
        if (parseInt(s[i]) != NaN) {
            str += s[i];
        }
    }
    let returnString = parseInt(str) ? parseInt(str) : 0;
    
    if(returnString > Math.pow(2, 31)-1) {
        return Math.pow(2, 31)-1;
    } else if(returnString < -1*Math.pow(2, 31)) {
        return -1*Math.pow(2, 31);
    } else {
        return returnString;
    }
};