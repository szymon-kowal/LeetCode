/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    allowed = new Set(allowed.split(''));
    let newWord = '';
    let char = '';
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        newWord = words[i].split('');
        for (let j = 0; j < newWord.length; j++) {
            char = newWord[j]
            if (!(allowed.has(char))) {
                count--;
                break;
            }
        }
        count++;  
    }
    return count;
};