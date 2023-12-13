function evalRPN(tokens: string[]): number {
    const operatorSet = new Set(['+', '-', '*', '/']);
    const stack: number[] = [];
    
    for (let i = 0; i < tokens.length; i++) {
        if (operatorSet.has(tokens[i])) {
            const sNum = stack.pop();
            const fNum = stack.pop();
            let curr = 0;

            if (tokens[i] == '+') {
                curr = fNum + sNum;
            } else if (tokens[i] == '-') {
                curr = fNum - sNum;
            } else if (tokens[i] == '*') {
                curr = fNum * sNum;
            } else {
                curr = Math.trunc(fNum / sNum);
            }

            stack.push(curr);
        } else {
            stack.push(parseInt(tokens[i]));
        }
    }
    return stack.pop() 
}
