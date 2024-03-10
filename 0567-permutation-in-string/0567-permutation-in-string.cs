public class Solution {
    public bool CheckInclusion(string s1, string s2) {
        if (s1.Length > s2.Length) return false;

        var s1Container = new Dictionary<char, int>();
        var slidingWindow = new Dictionary<char, int>();

        foreach (char ch in s1) {
            if (!s1Container.ContainsKey(ch)) s1Container[ch] = 0;
            s1Container[ch]++;
        }

        for (int i = 0; i < s1.Length; i++) {
            char ch = s2[i];
            if (!slidingWindow.ContainsKey(ch)) slidingWindow[ch] = 0;
            slidingWindow[ch]++;
        }

        int matches = 0;

        foreach (var item in s1Container) {
            if (slidingWindow.ContainsKey(item.Key) && slidingWindow[item.Key] == item.Value) {
                matches++;
            }
        }

        for (int i = 0; i <= s2.Length - s1.Length; i++) {
            if (matches == s1Container.Count) return true; 

            char charToRemove = s2[i];
            char charToAdd = (i + s1.Length) < s2.Length ? s2[i + s1.Length] : '\0';

            if (i + s1.Length < s2.Length) {
                if (!slidingWindow.ContainsKey(charToAdd)) slidingWindow[charToAdd] = 0;
                slidingWindow[charToAdd]++;
                if (s1Container.ContainsKey(charToAdd) && slidingWindow[charToAdd] == s1Container[charToAdd]) {
                    matches++;
                } else if (s1Container.ContainsKey(charToAdd) && slidingWindow[charToAdd] == s1Container[charToAdd] + 1) {
                    matches--;
                }
            }

            slidingWindow[charToRemove]--;
            if (s1Container.ContainsKey(charToRemove) && slidingWindow[charToRemove] == s1Container[charToRemove]) {
                matches++;
            } else if (s1Container.ContainsKey(charToRemove) && slidingWindow[charToRemove] == s1Container[charToRemove] - 1) {
                matches--;
            }

            if (slidingWindow[charToRemove] == 0) {
                slidingWindow.Remove(charToRemove);
            }
        }

        return false;
    }
}
