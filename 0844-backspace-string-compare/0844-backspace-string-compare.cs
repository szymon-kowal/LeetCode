public class Solution {
    public bool BackspaceCompare(string s, string t) {  
        return BuildString(s) == BuildString(t);
    }
    public string BuildString(string str) {
        StringBuilder result = new StringBuilder();
        foreach (char character in str) {
            if (character == '#') {
                if (result.Length > 0) {
                    result.Length--;
                }
            } else {
                result.Append(character);
            }
        }
        return result.ToString();
    }
}