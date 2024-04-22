public class Solution {
   public int[] EvenOddBit(int n) {
        string binaryStr = Convert.ToString(n, 2); 
        int odd = 0;
        int even = 0;

        for (int i = 0; i < binaryStr.Length; i++) {
            int index = binaryStr.Length - 1 - i; 
            if (binaryStr[index] == '1') {
                if (i % 2 == 0) {
                    even++; 
                } else {
                    odd++; 
                }
            }
        }
        return new int[] { even, odd };
    }
}