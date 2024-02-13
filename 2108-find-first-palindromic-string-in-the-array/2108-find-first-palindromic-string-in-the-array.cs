public class Solution {
    public string FirstPalindrome(string[] words) {
        for (int i = 0; i < words.Length; i++) {
            bool isPalindromic = true;
            for (int j = 0; j < words[i].Length / 2; j++) {
                if (words[i][j] != words[i][words[i].Length - j - 1]) {
                    isPalindromic = false;
                }
            }
            if (isPalindromic) {
                return words[i];
            }
        }
        return "";
    }
}