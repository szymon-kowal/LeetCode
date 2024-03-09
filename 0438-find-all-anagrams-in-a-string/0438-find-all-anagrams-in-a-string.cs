public class Solution {
    public IList<int> FindAnagrams(string s, string p) {
        var answerList = new List<int>();
        if (s.Length < p.Length) return answerList;

        var charCountP = new Dictionary<char, int>();
        var windowCharCount = new Dictionary<char, int>();
        int matches = 0;

        // Initialize the character counts for p
        foreach (var ch in p) {
            if (!charCountP.ContainsKey(ch)) charCountP[ch] = 0;
            charCountP[ch]++;
        }

        // Initialize the first window in s
        for (int i = 0; i < p.Length; i++) {
            var ch = s[i];
            if (!windowCharCount.ContainsKey(ch)) windowCharCount[ch] = 0;
            windowCharCount[ch]++;

            if (charCountP.ContainsKey(ch) && windowCharCount[ch] == charCountP[ch]) {
                matches++;
            }
        }

        // Check the first window
        if (matches == charCountP.Count) answerList.Add(0);

        for (int i = p.Length; i < s.Length; i++) {
            var newChar = s[i];
            if (!windowCharCount.ContainsKey(newChar)) windowCharCount[newChar] = 0;
            windowCharCount[newChar]++;
            if (charCountP.ContainsKey(newChar) && windowCharCount[newChar] == charCountP[newChar]) {
                matches++;
            }

            // Remove old character
            var oldChar = s[i - p.Length];
            if (charCountP.ContainsKey(oldChar) && windowCharCount[oldChar] == charCountP[oldChar]) {
                matches--;
            }
            windowCharCount[oldChar]--;
            if (windowCharCount[oldChar] == 0) windowCharCount.Remove(oldChar);

            // Check for anagram
            if (matches == charCountP.Count) {
                answerList.Add(i - p.Length + 1);
            }
        }

        return answerList;
    }
}
