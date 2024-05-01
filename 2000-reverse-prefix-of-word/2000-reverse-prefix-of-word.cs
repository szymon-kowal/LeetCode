public class Solution {
    public string ReversePrefix(string word, char ch) {
        int index = word.IndexOf(ch);
        string answer = word.Substring(0, index + 1);
        
        char[] reversed = answer.ToCharArray();
        Array.Reverse(reversed);
        
        return new string(reversed) + word.Substring(index + 1);
    }
}