/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let hashMap = {};
    let arr =[];
    for (let i = 0; i < numbers.length; i++) {
        if ((target - numbers[i]) in hashMap) {
            arr[0] = hashMap[target - numbers[i]];
            arr[1] = i + 1;
            break;
        } else {
            hashMap[numbers[i]] = i + 1;
            }
        }
    return arr;
}

