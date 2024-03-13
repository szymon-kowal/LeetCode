public class Solution {
    public int CharacterReplacement(string s, int k) {
        Dictionary<char, int> freq = new();
        int left = 0;
        int maxCount = 0;
        int maxSub = 0;
        for (int i = 0; i < s.Length; i++) {
            if (freq.ContainsKey(s[i])) {
                freq[s[i]]++;
            } else {
               freq.Add(s[i], 1); 
            }
            maxCount = Math.Max(maxCount, freq[s[i]]);
            
            int len = 1 + i - left;
            if (len - maxCount <= k) maxSub = len;
            else {
                freq[s[left]]--;
                left++;
            }
        }
        return maxSub;
    }
}