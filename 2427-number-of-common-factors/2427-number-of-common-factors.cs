public class Solution {
    public int CommonFactors(int a, int b) {
        int maxVal = a < b ? a : b;
        int count = 0;
        for (int i = 1; i <= maxVal; i++) {
            if (a % i == 0 && b % i == 0) {
                count++;
            }
        }
        return count;
    }
}