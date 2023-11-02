/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const stack = [];

    for (let i = 0; i < operations.length; i++) {
        const operation = operations[i];
        if (!isNaN(operation)) {
            stack.push(parseInt(operation));
        } else if (operation === '+') {
            const lastTwoScoresSum = stack[stack.length - 1] + stack[stack.length - 2];
            stack.push(lastTwoScoresSum);
        } else if (operation === 'D') {
            const doubleScore = 2 * stack[stack.length - 1];
            stack.push(doubleScore);
        } else if (operation === 'C') {
            stack.pop();
        }
    }

    return stack.reduce((sum, score) => sum + score, 0);
};
