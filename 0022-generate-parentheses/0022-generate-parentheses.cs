public class Solution {
    public IList<string> GenerateParenthesis(int n) {
        IList<string> answer = new List<string>();
        helper(answer, "(", 1 , 0, n);
        return answer;
    }
    
    private void helper(IList<string> list, string curr, int open, int close, int n) {
        if(curr.Length == 2 * n) {
            list.Add(curr);
            return;
        }
        if(open < n) {
           helper(list, curr + "(", open + 1, close,n);
        }
        if(close < open) {
            helper(list, curr + ")", open, close + 1,n);
        }
    }
}