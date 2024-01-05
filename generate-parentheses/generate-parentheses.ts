function generateParenthesis(n: number): string[] {
    const result = [];
    helperParentheses(result, '', 0, 0, n);
    return result;
};

function helperParentheses(result:string[], current:string, open:number, close:number, n:number) {
  if (current.length === 2 * n) {
    result.push(current);
    return;
  }
  if (open < n) {
    helperParentheses(result, current + '(', open + 1, close, n);
  }
  if (close < open) {
    helperParentheses(result, current + ')', open, close + 1, n);
  }
};