public class Solution {
    public int SubtractProductAndSum(int n) {
        int product = 1;
        int sum = 0;
        foreach(char s in n.ToString()) {
            int digit = s - '0';
            product *= digit;
            sum += digit;
        }
    return product - sum;
    }
}