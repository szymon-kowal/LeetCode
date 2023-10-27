/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let answer = [];
    for (let i = 0; i < prices.length; i += 1) {
        let hasDiscount = false;
        for (let j = i + 1; j < prices.length; j += 1) {
            if (prices[j] <= prices[i]) {
                answer.push(prices[i] - prices[j]);
                hasDiscount = true;
                break;
            }
        }
        if (!hasDiscount) {
            answer.push(prices[i]);
        }
    }
    return answer;
};