/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

function isVowel(char) {
    return 'aeiou'.includes(char);
}

var vowelStrings = function(words, left, right) {
    let count = 0;
    for (let i = left; i <= right; i++) {
        const word = words[i];
        if (isVowel(word[0]) && isVowel(word[word.length - 1])) {
            count++;
        }
    }
    return count;
}