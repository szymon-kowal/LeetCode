public class Solution {
    public int CountGoodSubstrings(string s) {
        var count = 0;

        for (int i = 0; i < s.Length - 2; i++) {
            if (s.Substring(i, 3).ToHashSet().Count == 3)
                count++;
        }

        return count;
    }
}