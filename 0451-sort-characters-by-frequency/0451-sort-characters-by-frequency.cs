public class Solution {
    public string FrequencySort(string s) {
        var storage = new Dictionary<char, int>();
        foreach(char charStr in s) {
            if (storage.ContainsKey(charStr)) {
                storage[charStr]++;
            } else {
                storage.Add(charStr,1);
            }
        }
        
        var sortedLetters = storage.OrderByDescending(pair => pair.Value);
        StringBuilder answer = new StringBuilder();
        foreach(var pair in sortedLetters) {
            answer.Append(new string(pair.Key, pair.Value));
        }
        return answer.ToString();
    }
}