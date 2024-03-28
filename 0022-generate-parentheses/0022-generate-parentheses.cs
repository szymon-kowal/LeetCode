public class Solution {
    public IList<string> GenerateParenthesis(int n) {
        List<string> answer = new();
        Helper(answer, new StringBuilder(), 0, 0, n);
        return answer;
    }
    public void Helper(IList<string> answer, StringBuilder current, int openP, int closeP, int n) {
        if (current.Length == n * 2) {
            answer.Add(current.ToString());
        }
        if (openP < n) {
            current.Append("(");
            Helper(answer, current, openP + 1, closeP, n);
            current.Remove(current.Length - 1, 1);
        }
        if (closeP < openP) {
            current.Append(")");
            Helper(answer, current, openP , closeP + 1, n);
            current.Remove(current.Length - 1, 1);
        }
        return;
    }
}