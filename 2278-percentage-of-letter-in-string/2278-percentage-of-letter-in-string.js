/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let letterCount = 0;
    for (let letterString of s) {
        if (letterString === letter) {
            letterCount++;
        }
    }
    return Math.floor(letterCount / s.length * 100);
};