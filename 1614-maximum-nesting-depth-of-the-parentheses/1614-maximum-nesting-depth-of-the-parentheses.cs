public class Solution {
    public int MaxDepth(string s) {
        int depth = 0;
        int maxDepth = 0;

        foreach (char c in s) {
            if (c == '(') {
                depth++;
                if (depth > maxDepth) {
                    maxDepth = depth;
                }
            } else if (c == ')') {
                depth--;
            }
        }
    return maxDepth;
    }
}