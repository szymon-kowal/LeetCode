public class Solution {
    public int Tribonacci(int n) {
        int first = 0;
        int second = 1;
        int third = 1;
        if (n == 0) return 0;
        if (n == 1) return 1;
        if (n == 2) return 1;
        for (int i = 3; i <= n; i++) {
            int temp = third;
            third = first + second + third;
            first = second;
            second = temp;
        }
        return third;
    }
}