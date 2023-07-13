/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        if(hashMap.hasOwnProperty(nums[i])) {
            hashMap[nums[i]] += 1;
        } else {
           hashMap[nums[i]] = 1; 
        }
    }
    const valuesArray = Object.values(hashMap);

    // Bubble sort in descending order
    for (let i = 0; i < valuesArray.length - 1; i++) {
      for (let j = 0; j < valuesArray.length - 1 - i; j++) {
        if (valuesArray[j] < valuesArray[j + 1]) {
          // Swap values
          [valuesArray[j], valuesArray[j + 1]] = [valuesArray[j + 1], valuesArray[j]];
        }
      }
    }

const biggestValues = valuesArray.slice(0, k);
    
    const biggestKeys = [];

    for (let key in hashMap) {
      if (biggestValues.includes(hashMap[key])) {
        biggestKeys.push(key);
      }
    }
    return biggestKeys;
};