/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let answer = new Array();
    const n = arr.length;

    for(let i=0; i<n; i+=size){
        let temp = new Array();
        
        for(let j=i; j<i+size; ++j){
            if(j>=n) break;
            temp.push(arr[j]);
        }
        answer.push(temp);
    }
    return answer;

};

