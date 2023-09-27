/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let cont = {};
    jewels = jewels.split('');
    stones = stones.split('');
    for (let i = 0; i < jewels.length;i++) {
        if (!(cont.hasOwnProperty(jewels[i]))) {
            cont[jewels[i]] = true;
        }
    }
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        console.log(cont.hasOwnProperty(stones[i]))
        if (cont.hasOwnProperty(stones[i])) {
            count++;
        }
    }
    return count;
};