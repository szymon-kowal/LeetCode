/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let l1 = {};
    let lowestIndex = Number.MAX_VALUE;
    let sum = 0;
    for (let i = 0; i < list1.length; i++) {
        l1[list1[i]] = i;
    }
    
    let arr = [];
    for (let j = 0; j < list2.length; j++) {
        if (l1.hasOwnProperty(list2[j])) {
            sum = l1[list2[j]] + j;
            if (sum < lowestIndex) {
                arr = [list2[j]];
                lowestIndex = sum;
            } else if (sum == lowestIndex) {
                arr.push(list2[j]);
            }
        }
    }
    return arr;   
};