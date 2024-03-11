public class Solution {
    public int CountGoodSubstrings(string s) {
        var count = 0;

        for (int i = 1; i < s.Length - 1; i++) {
            if (s[i - 1] != s[i] && s[i] != s[i + 1] && s[i + 1] != s[i - 1]) {
                count++;
            }
        }

        return count;
    }
}