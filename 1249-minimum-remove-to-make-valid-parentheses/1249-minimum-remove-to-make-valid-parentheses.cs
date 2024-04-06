public class Solution {
    public string MinRemoveToMakeValid(string s) {
        int countLeftParentheses = 0;
        var chars = s.ToCharArray();
        for (int i = 0; i < chars.Length; i++) {
            if (chars[i] == '(') {
                countLeftParentheses++;
            } else if (chars[i] == ')') {
                if (countLeftParentheses > 0) {
                    countLeftParentheses--;
                } else {
                    chars[i] = '\0';
                }
            }
        }

        int countRightParentheses = 0;
        for (int i = chars.Length - 1; i >= 0; i--) {
            if (chars[i] == ')') {
                countRightParentheses++;
            } else if (chars[i] == '(') {
                if (countRightParentheses > 0) {
                    countRightParentheses--;
                } else {
                    chars[i] = '\0';
                }
            }
        }

        return new string(Array.FindAll(chars, c => c != '\0'));
    }
}