public class Solution {
    public string MaximumOddBinaryNumber(string s) {
        StringBuilder answerStr = new();
        int countOfOnes = 0;
        foreach(var charStr in s) {
            if (charStr == '1') {
                countOfOnes++;
            }
        }
        for(int i = 0; i < s.Length - 1; i++) {
            if (countOfOnes > 1) {
                answerStr.Append('1');
                countOfOnes--;
            } else {
                answerStr.Append('0');
            }
        }
        return answerStr.Append('1').ToString();
    }
}