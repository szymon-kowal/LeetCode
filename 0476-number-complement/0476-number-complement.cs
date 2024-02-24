public class Solution {
    public int FindComplement(int num) {
        string binary = Convert.ToString(num, 2);
        StringBuilder answerString = new();
        for (int i = 0; i < binary.Length; i++) {
            if (binary[i] == '1') {
                answerString.Append('0');
            } else {
                answerString.Append('1');
            }
        }
        return  Convert.ToInt32(answerString.ToString(), 2);
    }
}